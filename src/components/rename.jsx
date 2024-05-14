import { Input } from '@material-tailwind/react';
import TextLabel from './text-label';
import useLabels from '@/hooks/useLabels';

export default function Rename({ label, changeLabel }) {
  const { labels, removeLabel } = useLabels();

  return (
    <div className='w-1/2 mb-8'>
      <Input
        type='text'
        label='Texto a borrar'
        className='flex-1'
        containerProps={{
          style: {
            minWidth: '0px',
            with: '100%',
          },
        }}
        value={label}
        onChange={changeLabel}
      />
      <div className='my-4 flex flex-wrap gap-1'>
        {labels.map((label) => (
          <TextLabel
            key={label}
            text={label}
            onClick={() => changeLabel(label)}
            onClose={() => removeLabel(label)}
          />
        ))}
      </div>
    </div>
  );
}
