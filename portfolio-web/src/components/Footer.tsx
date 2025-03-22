import { GitHub, LinkedIn } from "@/icons";

export default function Footer() {
  return (
    <div className="p-4 fixed bottom-0 z-10 w-full text-right">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-row gap-2">
          <a
            href="https://github.com/mq022002"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <GitHub fill="var(--text)" width={24} height={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/matthewquijano022002"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <LinkedIn fill="var(--text)" width={24} height={24} />
          </a>
        </div>
        <div>&copy; {new Date().getFullYear()} Matthew Quijano</div>
      </div>
    </div>
  );
}
