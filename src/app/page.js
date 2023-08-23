import Link from "next/link";
import getAllBlogItem from "./lib/getAllBlogItem"

export default async function Home() {
  const categories = await getAllBlogItem();
  // console.log(data);
  return (
    <>
      <div className='bg-orange-100 pl-5'>
          <h1 className='py-3 text-start'>Blog Item</h1>
      </div>
      <div>
          <div className="bg-orange-100 my-8 p-5">
            {
              categories.map((item) => {
                  return (
                    <div key={item.id}><Link href="" className="bg-orange-400 my-4 p-3 block">{item.id}. {" "} {item.name}</Link></div>
                  )
              })
            }
          </div>
      </div>
    </>
  )
}
