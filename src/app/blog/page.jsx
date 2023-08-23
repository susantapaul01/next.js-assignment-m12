import Link from "next/link";
import getNewestPost from "../lib/getNewestPost";

export default async function Blog() {
  const response = await getNewestPost();
  // console.log(data);
  return (
    <>
      <div className='bg-orange-100 pl-5'>
          <h1 className='py-3 text-start'>Newest Blog Title</h1>
      </div>
      <div>
          <div className="bg-orange-100 my-8 p-5">
            {
              response.map((item) => {
                  return (
                    <div key={item.id}><Link href={`/blog/${item.id}`} className="bg-orange-400 my-4 p-3 block">{item.id}. {" "} {item.title}</Link></div>
                  )
              })
            }
          </div>
      </div>
    </>
  )
}
