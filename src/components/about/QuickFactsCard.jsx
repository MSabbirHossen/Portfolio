import Card from '../common/Card';
import Typography from '../common/Typography';

export default function QuickFactsCard({ title, studyingAt, location }) {
  return (
    <Card className="space-y-5">
      <Typography variant="subtitle" className="text-slate-100">
        👨 Quick Facts
      </Typography>

      <div className="space-y-4 text-slate-300">
        <div>
          <p className="text-sm text-slate-500">Role</p>
          <p>{title}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Studying At</p>
          <p>{studyingAt}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Location</p>
          <p>{location}</p>
        </div>
      </div>
    </Card>
  );
}
