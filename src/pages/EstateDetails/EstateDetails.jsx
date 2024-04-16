import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const industrial = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const industry = industrial.find((industry) => industry.id === idInt);
  const { estate_title } = industry;
  console.log(industrial, id);
  return (
    <div>
      <Helmet>
        <title>InnovativeTechNetwork / Estate Details</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div>
        <h1 className="text-3xl font-bold mb-5">{estate_title}</h1>
      </div>
    </div>
  );
};

export default EstateDetails;
