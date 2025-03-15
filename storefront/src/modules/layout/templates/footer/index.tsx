// import { getCategoriesList } from "@lib/data/categories"
// import { getCollectionsList } from "@lib/data/collections"
// import { Text, clx } from "@medusajs/ui"

// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import MedusaCTA from "@modules/layout/components/medusa-cta"

// export default async function Footer() {
//   const { collections } = await getCollectionsList(0, 6)
//   const { product_categories } = await getCategoriesList(0, 6)

//   return (
//     <footer className="border-t border-ui-border-base w-full">
//       <div className="content-container flex flex-col w-full">
//         <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
//           <div>
//             <LocalizedClientLink
//               href="/"
//               className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
//             >
//               Medusa Store
//             </LocalizedClientLink>
//           </div>
//           <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
//             {product_categories && product_categories?.length > 0 && (
//               <div className="flex flex-col gap-y-2">
//                 <span className="txt-small-plus txt-ui-fg-base">
//                   Categories
//                 </span>
//                 <ul
//                   className="grid grid-cols-1 gap-2"
//                   data-testid="footer-categories"
//                 >
//                   {product_categories?.slice(0, 6).map((c) => {
//                     if (c.parent_category) {
//                       return
//                     }

//                     const children =
//                       c.category_children?.map((child) => ({
//                         name: child.name,
//                         handle: child.handle,
//                         id: child.id,
//                       })) || null

//                     return (
//                       <li
//                         className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
//                         key={c.id}
//                       >
//                         <LocalizedClientLink
//                           className={clx(
//                             "hover:text-ui-fg-base",
//                             children && "txt-small-plus"
//                           )}
//                           href={`/categories/${c.handle}`}
//                           data-testid="category-link"
//                         >
//                           {c.name}
//                         </LocalizedClientLink>
//                         {children && (
//                           <ul className="grid grid-cols-1 ml-3 gap-2">
//                             {children &&
//                               children.map((child) => (
//                                 <li key={child.id}>
//                                   <LocalizedClientLink
//                                     className="hover:text-ui-fg-base"
//                                     href={`/categories/${child.handle}`}
//                                     data-testid="category-link"
//                                   >
//                                     {child.name}
//                                   </LocalizedClientLink>
//                                 </li>
//                               ))}
//                           </ul>
//                         )}
//                       </li>
//                     )
//                   })}
//                 </ul>
//               </div>
//             )}
//             {collections && collections.length > 0 && (
//               <div className="flex flex-col gap-y-2">
//                 <span className="txt-small-plus txt-ui-fg-base">
//                   Collections
//                 </span>
//                 <ul
//                   className={clx(
//                     "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
//                     {
//                       "grid-cols-2": (collections?.length || 0) > 3,
//                     }
//                   )}
//                 >
//                   {collections?.slice(0, 6).map((c) => (
//                     <li key={c.id}>
//                       <LocalizedClientLink
//                         className="hover:text-ui-fg-base"
//                         href={`/collections/${c.handle}`}
//                       >
//                         {c.title}
//                       </LocalizedClientLink>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             <div className="flex flex-col gap-y-2">
//               <span className="txt-small-plus txt-ui-fg-base">Medusa</span>
//               <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
//                 <li>
//                   <a
//                     href="https://github.com/medusajs"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     GitHub
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://docs.medusajs.com"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     Documentation
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://github.com/medusajs/nextjs-starter-medusa"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     Source code
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
//           <Text className="txt-compact-small">
//             © {new Date().getFullYear()} Medusa Store. All rights reserved.
//           </Text>
//           <MedusaCTA />
//         </div>
//       </div>
//     </footer>
//   )
// }
import { getCategoriesList } from "@lib/data/categories";
import { getCollectionsList } from "@lib/data/collections";
import { Text } from "@medusajs/ui";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import MedusaCTA from "@modules/layout/components/medusa-cta";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6);
  const { product_categories } = await getCategoriesList(0, 6);

  return (
    <footer className="border-t border-ui-border-base w-full bg-white text-gray-800">
      <div className="content-container flex flex-col w-full py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1">
            <LocalizedClientLink
              href="/"
              className="text-lg font-semibold text-gray-700 hover:text-gray-900 uppercase block mb-3"
            >
              Gemsnut Store
            </LocalizedClientLink>
            <p className="text-gray-600 text-sm">Your one-stop shop for all premium products.</p>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-800">Categories</span>
            <ul className="mt-2 space-y-2 text-gray-600 text-sm" data-testid="footer-categories">
              {product_categories?.slice(0, 6).map((c) => (
                !c.parent_category && (
                  <li key={c.id}>
                    <LocalizedClientLink className="hover:text-gray-900 transition-colors" href={`/categories/${c.handle}`}>
                      {c.name}
                    </LocalizedClientLink>
                  </li>
                )
              ))}
            </ul>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-800">Collections</span>
            <ul className="mt-2 space-y-2 text-gray-600 text-sm">
              {collections?.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <LocalizedClientLink className="hover:text-gray-900 transition-colors" href={`/collections/${c.handle}`}>
                    {c.title}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-800">Contact Us</span>
            <ul className="mt-2 text-gray-600 text-sm space-y-1">
              <li>Email: support@gemsnut.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Market St, City, Country</li>
            </ul>
          </div>
        </div>
        
        {/* <div className="flex justify-center gap-6 my-8 text-xl text-gray-600">
          <a href="#" className="hover:text-gray-900 transition-colors"><FaFacebook /></a>
          <a href="#" className="hover:text-gray-900 transition-colors"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-900 transition-colors"><FaInstagram /></a>
        </div> */}
        
        <div className="flex flex-col md:flex-row w-full justify-between items-center text-gray-600 text-sm border-t border-gray-200 pt-4">
          <Text>© {new Date().getFullYear()} Gemsnut Store. All rights reserved.</Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  );
}
