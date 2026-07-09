import useCountAnimation from '../../hooks/useCountAnimation';

export default function AnimatedNumber({ value }) {
  const animated = useCountAnimation(value);

  return animated;
}
