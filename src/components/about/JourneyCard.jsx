import Card from '../common/Card';
import Typography from '../common/Typography';

export default function JourneyCard({ journey }) {
  return (
    <Card className="h-full space-y-5">
      <Typography variant="subtitle" className="text-slate-100">
        🚀 My Journey
      </Typography>

      <Typography variant="body" className="leading-8 text-slate-400 md:text-justify">
        {journey}
      </Typography>
    </Card>
  );
}
