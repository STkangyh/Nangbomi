interface RefridetailProps {
  id: string;
}

export default function RefriDetail({ id }: RefridetailProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Temperature: {temperature}°C</p>
    </div>
  );
}
