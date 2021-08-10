import { useMutation } from '@apollo/client';
import React, {useState} from 'react';
import { UPLOAD_FILE } from '../api/mutations';

const Home = () => {
  const [mutate ] = useMutation(UPLOAD_FILE)
  const [file, setFile] = useState(null);
  const submit = async () => {
    console.log(`Uploading ${file.filename}.`)
    const fileResponse = await mutate({variables: {file}});
    console.log(` Sucessfully uploaded ${fileResponse.data.filename}`);
    setFile(null);
  }
  return (
    <div className="container">
      <h1>Home</h1>
      <input type="file" onChange={({target: {files: [inputFile]}}) => setFile(inputFile)} />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Home;
