import { FaExternalLinkAlt } from 'react-icons/fa';
import Card from '../common/Card';
import Typography from '../common/Typography';

export default function ProjectLinkCard({ icon: Icon, title, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
      //   className="w-full"
    >
      <Card className="flex items-center justify-between rounded-xl border p-4 transition hover:border-indigo-500  mt-4">
        <div className="flex items-center gap-3">
          <Icon className="text-xl text-indigo-500" />

          <Typography variant="body" className="font-medium">
            {title}
          </Typography>
        </div>

        <FaExternalLinkAlt className="text-sm opacity-70" />
      </Card>
    </a>
  );
}
