import { Link } from "react-router-dom";
import { getUploads } from "../../models/Uploads";
import { useEffect, useState } from "react";
import Article from "../../components/Article";

export default function Home() {
  const [uploads, setUploads] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getUploads();
    if (data.status === 200) {
      setUploads(data.payload);
      setLoaded(true);
    } else {
      setLoaded(null);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <h1>Home page</h1>
        <p>Images not found</p>
        <Link to={"/upload"}>
          <p>Upload new image</p>
        </Link>
      </>
    );
  }

  return (
    <>
      <h1>Home page</h1>
      {isLoaded ? (
        uploads.map((upload, index) => <Article key={index} {...upload} />)
      ) : (
        <p>Loading</p>
      )}
      <Link to={"/upload"}>
        <p>Upload new image</p>
      </Link>
    </>
  );
}
