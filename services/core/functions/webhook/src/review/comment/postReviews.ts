import { Context } from "probot";

import { findPositionsFromSnippet } from "./findLineInPatch";
import { formatReviewComment } from "./formatReviewComment";
import { ReviewFile } from "../../types";

export const postReviews = async (
  context: Context<"pull_request">,
  reviews: ReviewFile[],
  commits: { sha: string }[]
): Promise<void> => {
  for (const review of reviews) {
    const position = findPositionsFromSnippet(review);

    await context.octokit.pulls.createReviewComment({
      repo: context.repo().repo,
      owner: context.repo().owner,
      pull_number: context.pullRequest().pull_number,
      commit_id: commits[commits.length - 1].sha,
      path: review.filename,
      body: formatReviewComment(review),
      side: "RIGHT",
      line: position.lastLine,
      start_side: "RIGHT",
      start_line: position.firstLine,
    });
    console.log("Posted review comment on file:", review.filename);
  }
};