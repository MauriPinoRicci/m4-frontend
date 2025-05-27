import { CardComponent } from '@/components/card';

export default function Home() {
  return (
    <section className="flex flex-row gap-4 p-4">
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </section>
  );
}
