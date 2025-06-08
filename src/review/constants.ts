export const signOff =
  '#### Powered by [Code Review GPT](https://github.com/mattzcarey/code-review-gpt)';

export const modelInfo = [
  // Existing models from constants.ts (verified against YAML or assumed still relevant)
  {
    model: 'o3-mini',
    maxPromptLength: 300000, // 100k tokens (as per existing file)
  },
  {
    model: 'gpt-4o-mini', // Matches gpt-4o-mini-2024-07-18 or generic gpt-4o-mini from YAML
    maxPromptLength: 300000, // 128k tokens (as per existing file)
  },
  {
    model: 'gpt-4o', // Matches generic gpt-4o or specific dated versions from YAML
    maxPromptLength: 300000, // 128k tokens (as per existing file)
  },
  {
    model: 'gpt-4-turbo', // Matches generic gpt-4-turbo or specific dated versions from YAML
    maxPromptLength: 300000, // 128k tokens (as per existing file)
  },
  {
    model: 'gpt-4-turbo-preview', // From existing file, also in YAML
    maxPromptLength: 300000, // 128k tokens (as per existing file)
  },
  {
    model: 'gpt-4', // From existing file, also in YAML
    maxPromptLength: 21000, // 8k tokens (as per existing file)
  },
  {
    model: 'gpt-4-32k', // From existing file, also in YAML
    maxPromptLength: 90000, // 32k tokens (as per existing file)
  },
  {
    model: 'gpt-3.5-turbo', // From existing file, also in YAML
    maxPromptLength: 9000, // 4k tokens (as per existing file)
  },
  {
    model: 'gpt-3.5-turbo-16k', // From existing file, matches a YAML variant
    maxPromptLength: 45000, // 16k tokens (as per existing file)
  },

  // New models from YAML, with estimated/known context windows
  {
    model: 'gpt-3.5-turbo-0125',
    maxPromptLength: 45000, // Assuming 16k tokens like gpt-3.5-turbo-16k, needs verification
  },
  {
    model: 'gpt-3.5-turbo-1106',
    maxPromptLength: 45000, // Assuming 16k tokens, needs verification
  },
  {
    model: 'gpt-3.5-turbo-instruct',
    maxPromptLength: 12000, // Typically 4k tokens for instruct models (4000 * 3 chars/token approx)
  },
  {
    model: 'gpt-4-0125-preview', // Likely a version of gpt-4-turbo-preview
    maxPromptLength: 300000, // 128k tokens (estimate)
  },
  {
    model: 'gpt-4-0613', // Older version of gpt-4
    maxPromptLength: 21000, // 8k tokens (estimate, same as gpt-4)
  },
  {
    model: 'gpt-4-1106-preview', // Likely a version of gpt-4-turbo-preview
    maxPromptLength: 300000, // 128k tokens (estimate)
  },
  {
    model: 'gpt-4-32k-0613', // Older version of gpt-4-32k
    maxPromptLength: 90000, // 32k tokens (estimate)
  },
  {
    model: 'gpt-4-turbo-2024-04-09', // Specific version of gpt-4-turbo
    maxPromptLength: 300000, // 128k tokens (estimate)
  },
  {
    model: 'gpt-4-vision-preview',
    maxPromptLength: 300000, // 128k tokens (estimate, includes vision)
  },
  {
    model: 'gpt-4.1', // Hypothetical/new from YAML
    maxPromptLength: 300000, // 128k tokens (estimate, needs verification)
  },
  {
    model: 'gpt-4.1-mini', // Hypothetical/new from YAML
    maxPromptLength: 300000, // 128k tokens (estimate, needs verification)
  },
  {
    model: 'gpt-4.1-nano', // Hypothetical/new from YAML
    maxPromptLength: 90000, // 32k tokens (estimate, needs verification)
  },
  {
    model: 'gpt-4o-2024-05-13', // Specific version of gpt-4o
    maxPromptLength: 300000, // 128k tokens
  },
  {
    model: 'gpt-4o-2024-08-06', // Specific version of gpt-4o
    maxPromptLength: 300000, // 128k tokens
  },
  // gpt-4o-mini-2024-07-18 is effectively 'gpt-4o-mini' already covered
  {
    model: 'text-embedding-ada-002',
    maxPromptLength: 20480, // 8192 tokens * ~2.5 chars/token
  },
  {
    model: 'text-embedding-3-small',
    maxPromptLength: 20480, // Assuming similar to ada-002, 8192 tokens (estimate)
  },
  {
    model: 'text-embedding-3-large',
    maxPromptLength: 20480, // Assuming similar to ada-002, 8192 tokens (estimate)
  },
  // o1, o4, chatgpt-4o-latest are likely aliases or newer experimental versions.
  // For now, assign common context lengths and mark for review.
  {
    model: 'o1',
    maxPromptLength: 300000, // 128k tokens (estimate, needs verification)
  },
  {
    model: 'o1-preview',
    maxPromptLength: 300000, // 128k tokens (estimate, needs verification)
  },
  {
    model: 'o1-mini',
    maxPromptLength: 300000, // 128k tokens (estimate, needs verification)
  },
  {
    model: 'o4-mini',
    maxPromptLength: 300000, // 128k tokens (estimate, needs verification)
  },
  {
    model: 'chatgpt-4o-latest', // Alias for a gpt-4o version
    maxPromptLength: 300000, // 128k tokens
  },
  // Models like babbage-002, davinci-002 are older completion models,
  // their prompt length concept might differ but including for completeness from YAML.
  {
    model: 'babbage-002',
    maxPromptLength: 16000, // Older model, ~4k tokens, needs verification for this context
  },
  {
    model: 'davinci-002',
    maxPromptLength: 16000, // Older model, ~4k tokens, needs verification for this context
  }
]; // Response needs about 1k tokens ~= 3k characters

export const languageMap: { [key: string]: string } = {
  '.js': 'JavaScript',
  '.ts': 'TypeScript',
  '.py': 'Python',
  '.sh': 'Shell',
  '.go': 'Go',
  '.rs': 'Rust',
  '.tsx': 'TypeScript',
  '.jsx': 'JavaScript',
  '.dart': 'Dart',
  '.php': 'PHP',
  '.cpp': 'C++',
  '.h': 'C++',
  '.cxx': 'C++',
  '.hpp': 'C++',
  '.hxx': 'C++',
  '.cs': 'C#',
  '.rb': 'Ruby',
  '.kt': 'Kotlin',
  '.kts': 'Kotlin',
  '.java': 'Java',
  '.vue': 'Vue',
  '.tf': 'Terraform',
  '.hcl': 'Terraform',
  '.swift': 'Swift',
};

export const supportedFiles = new Set(Object.keys(languageMap));

export const excludedKeywords = new Set(['types']);

export const maxFeedbackCount = 3;

//for cost optimized changed lines
export const MAX_SURROUNDING_LINES = 5;
