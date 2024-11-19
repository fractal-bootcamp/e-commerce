import ProductList from '@/components/ProductListing';


export default async function DisplayProducts({
  searchParams,
}: {
  searchParams: { country?: string };
}) {
  const country = searchParams.country || 'India';
  console.log('country in search params', country);

  return (
    <div className="container mx-auto">
      <ProductList country={country} />
    </div>
  );
}