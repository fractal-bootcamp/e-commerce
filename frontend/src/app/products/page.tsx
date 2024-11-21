import XProductListing from "@/components/XProductListing";

const DisplayProducts = async ({ searchParams }: { searchParams: { country?: string } }) => {
  const country = searchParams.country || "India";

  return (
    <div className="container mx-auto">
      <XProductListing country={country} />
    </div>
  );
};

export default DisplayProducts;
