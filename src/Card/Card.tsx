

interface DataProps {
  name: string,
  age : number,
  MoreData?: Array<string>; 
}


function Card({
  name,
  age ,
  MoreData
}: DataProps) {
  // const [user, setuser] = useState<userArray>({});

  
  return (
    <>
      <div>{name}</div>
      <div>{age}</div>
      {
        MoreData && MoreData.map((data:string,index:number)=><h6 key={index}>{data}</h6>)
      }
    </>
  
  );
}

export default Card;
