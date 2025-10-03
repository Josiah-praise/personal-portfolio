import { MDXRemote } from 'next-mdx-remote/rsc';

interface ProjectContentProps {
  content: string;
}

export async function ProjectContent({ content }: ProjectContentProps) {
  return (
    <div className="prose prose-lg md:prose-xl max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary">
      <MDXRemote source={content} />
    </div>
  );
}
