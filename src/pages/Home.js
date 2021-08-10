import { useMutation } from '@apollo/client';
import React, {useState, useRef} from 'react';
import { UPLOAD_FILE } from '../api/mutations';

const Home = () => {
  const [mutate ] = useMutation(UPLOAD_FILE)
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);
  const submit = async () => {
    if (!file) {
      return
    }
    console.log(`Uploading ${file.name}.`)
    const fileResponse = await mutate({variables: {file}});
    console.log(`Sucessfully uploaded ${fileResponse.data.singleUpload.filename}`);
    setFile(null);
    inputRef.current.value = "";
  }

  const updateFile = ({target: {files:[inputFile]}}) => {
    setFile(inputFile || null);
    console.log(inputFile.name)
  }

  return (
    <div className="container">
      <h1>Home</h1>
      <input ref={inputRef} type="file" onChange={updateFile} />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Home;
