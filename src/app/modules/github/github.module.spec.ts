import { GitHubModule } from './github.module';

describe('GithubModule', () => {
  let githubModule: GitHubModule;

  beforeEach(() => {
    githubModule = new GitHubModule();
  });

  it('should create an instance', () => {
    expect(githubModule).toBeTruthy();
  });
});
