
// // // // // // // // // // // "use client"

// // // // // // // // // // // import { Popover, Transition } from "@headlessui/react"
// // // // // // // // // // // import { ArrowRightMini, XMark } from "@medusajs/icons"
// // // // // // // // // // // import { Text, clx, useToggleState } from "@medusajs/ui"
// // // // // // // // // // // import { Fragment } from "react"

// // // // // // // // // // // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // // // // // // // // // // import CountrySelect from "../country-select"
// // // // // // // // // // // import { HttpTypes } from "@medusajs/types"

// // // // // // // // // // // const SideMenuItems = {
// // // // // // // // // // //   Home: "/", 
// // // // // // // // // // //   Store: "/store",
// // // // // // // // // // //   Search: "/search",
// // // // // // // // // // //   Account: "/account",
// // // // // // // // // // //   Cart: "/cart",
// // // // // // // // // // // }

// // // // // // // // // // // const SideMenu = ({ regions, className }: { regions: HttpTypes.StoreRegion[] | null; className?: string }) => {
// // // // // // // // // // //   const toggleState = useToggleState()

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className={clx("h-full", className)}>
// // // // // // // // // // //       <div className="flex items-center h-full">
// // // // // // // // // // //         <Popover className="h-full flex">
// // // // // // // // // // //           {({ open, close }) => (
// // // // // // // // // // //             <div
// // // // // // // // // // //               className="h-full flex items-center relative"
// // // // // // // // // // //               onMouseEnter={toggleState.open}
// // // // // // // // // // //               onMouseLeave={toggleState.close}
// // // // // // // // // // //             >
// // // // // // // // // // //               <div className="text-yellow-500 hover:text-yellow-400 uppercase bg-gradient-to-r from-yellow-300 via-gray-300 to-yellow-500 bg-clip-text text-transparent font-bold drop-shadow-[0_4px_6px_rgba(255,215,0,0.4)]">
// // // // // // // // // // //                 Menu
// // // // // // // // // // //               </div>

// // // // // // // // // // //               <Transition
// // // // // // // // // // //                 show={toggleState.state}
// // // // // // // // // // //                 as={Fragment}
// // // // // // // // // // //                 enter="transition ease-out duration-150"
// // // // // // // // // // //                 enterFrom="opacity-0 translate-y-2"
// // // // // // // // // // //                 enterTo="opacity-100 translate-y-0 backdrop-blur-lg"
// // // // // // // // // // //                 leave="transition ease-in duration-150"
// // // // // // // // // // //                 leaveFrom="opacity-100 translate-y-0 backdrop-blur-lg"
// // // // // // // // // // //                 leaveTo="opacity-0 translate-y-2"
// // // // // // // // // // //               >
// // // // // // // // // // //                 <Popover.Panel className="absolute top-full left-0 flex flex-col w-full pr-4 sm:pr-0 sm:w-64 2xl:w-72 h-[calc(100vh-8rem)] z-30 text-sm text-ui-fg-on-color m-2">
// // // // // // // // // // //                   <div
// // // // // // // // // // //                     data-testid="nav-menu-popup"
// // // // // // // // // // //                     className="flex flex-col h-full bg-yellow-500 bg-opacity-30 backdrop-blur-lg rounded-2xl justify-between p-6 shadow-[0_0_10px_rgba(255,215,0,0.3)] border border-yellow-500/40"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <div className="flex justify-end" id="xmark">
// // // // // // // // // // //                       <button
// // // // // // // // // // //                         data-testid="close-menu-button"
// // // // // // // // // // //                         onClick={close}
// // // // // // // // // // //                         className="text-amber-900 hover:text-yellow-500 transition-colors duration-300 p-2 rounded-full bg-black bg-opacity-30"
// // // // // // // // // // //                       >
// // // // // // // // // // //                         <XMark className="w-6 h-6" />
// // // // // // // // // // //                       </button>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                     <ul className="flex flex-col gap-6 items-start justify-start">
// // // // // // // // // // //                       {Object.entries(SideMenuItems).map(([name, href]) => {
// // // // // // // // // // //                         return (
// // // // // // // // // // //                           <li key={name}>
// // // // // // // // // // //                             <LocalizedClientLink
// // // // // // // // // // //                               href={href}
// // // // // // // // // // //                               className={clx(
// // // // // // // // // // //                                 "text-xl font-semibold transition-colors duration-300",
// // // // // // // // // // //                                 "text-amber-900 hover:text-yellow-500"
// // // // // // // // // // //                               )}
// // // // // // // // // // //                               onClick={close}
// // // // // // // // // // //                               data-testid={`${name.toLowerCase()}-link`}
// // // // // // // // // // //                             >
// // // // // // // // // // //                               {name}
// // // // // // // // // // //                             </LocalizedClientLink>
// // // // // // // // // // //                           </li>
// // // // // // // // // // //                         )
// // // // // // // // // // //                       })}
// // // // // // // // // // //                     </ul>
// // // // // // // // // // //                     <div className="flex flex-col gap-y-6">
// // // // // // // // // // //                       <div
// // // // // // // // // // //                         className="flex justify-between items-center p-2 rounded-lg bg-yellow-400 bg-opacity-20 backdrop-blur-md"
// // // // // // // // // // //                         onMouseEnter={toggleState.open}
// // // // // // // // // // //                         onMouseLeave={toggleState.close}
// // // // // // // // // // //                       >
// // // // // // // // // // //                         {regions && (
// // // // // // // // // // //                           <CountrySelect
// // // // // // // // // // //                             toggleState={toggleState}
// // // // // // // // // // //                             regions={regions}
// // // // // // // // // // //                           />
// // // // // // // // // // //                         )}
// // // // // // // // // // //                         <ArrowRightMini
// // // // // // // // // // //                           className={clx(
// // // // // // // // // // //                             "transition-transform duration-150 text-amber-900 w-6 h-6",
// // // // // // // // // // //                             toggleState.state ? "-rotate-90" : ""
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         />
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                       <Text className="flex justify-between text-sm text-amber-900 opacity-80">
// // // // // // // // // // //                         © {new Date().getFullYear()} Gemsnut.com. All rights reserved.
// // // // // // // // // // //                       </Text>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </Popover.Panel>
// // // // // // // // // // //               </Transition>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           )}
// // // // // // // // // // //         </Popover>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   )
// // // // // // // // // // // }

// // // // // // // // // // // export default SideMenu
// // // // // // // // // // "use client"

// // // // // // // // // // import { Popover, Transition } from "@headlessui/react"
// // // // // // // // // // import { ArrowRightMini, XMark } from "@medusajs/icons"
// // // // // // // // // // import { Text, clx, useToggleState } from "@medusajs/ui"
// // // // // // // // // // import { Fragment, useMemo } from "react"

// // // // // // // // // // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // // // // // // // // // import CountrySelect from "../country-select"
// // // // // // // // // // import { HttpTypes } from "@medusajs/types"

// // // // // // // // // // const SideMenu = ({ regions, className }: { regions: HttpTypes.StoreRegion[] | null; className?: string }) => {
// // // // // // // // // //   const toggleState = useToggleState()

// // // // // // // // // //   const menuItems = useMemo(() => [
// // // // // // // // // //     { name: "Home", href: "/" },
// // // // // // // // // //     { name: "Store", href: "/store" },
// // // // // // // // // //     { name: "Search", href: "/search" },
// // // // // // // // // //     { name: "Account", href: "/account" },
// // // // // // // // // //     { name: "Cart", href: "/cart" },
// // // // // // // // // //   ], [])

// // // // // // // // // //   return (
// // // // // // // // // //     <div className={clx("h-full", className)}>
// // // // // // // // // //       <div className="flex items-center h-full">
// // // // // // // // // //         <Popover className="h-full flex">
// // // // // // // // // //           {({ open, close }) => (
// // // // // // // // // //             <>
// // // // // // // // // //               <div className="text-yellow-500 hover:text-yellow-400 uppercase font-bold relative flex h-full">
// // // // // // // // // //                 <Popover.Button
// // // // // // // // // //                   aria-label="Open menu"
// // // // // // // // // //                   data-testid="nav-menu-button"
// // // // // // // // // //                   className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none"
// // // // // // // // // //                 >
// // // // // // // // // //                   Menu
// // // // // // // // // //                 </Popover.Button>
// // // // // // // // // //               </div>

// // // // // // // // // //               <Transition
// // // // // // // // // //                 show={open}
// // // // // // // // // //                 enter="transition ease-out duration-150"
// // // // // // // // // //                 enterFrom="opacity-0"
// // // // // // // // // //                 enterTo="opacity-100 backdrop-blur-lg"
// // // // // // // // // //                 leave="transition ease-in duration-150"
// // // // // // // // // //                 leaveFrom="opacity-100 backdrop-blur-lg"
// // // // // // // // // //                 leaveTo="opacity-0"
// // // // // // // // // //               >
// // // // // // // // // //                 <Popover.Panel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-64 2xl:w-72 h-[calc(100vh-8rem)] z-30 inset-x-0 text-sm text-ui-fg-on-color m-2">
// // // // // // // // // //                   <div className="flex flex-col h-full bg-yellow-500 bg-opacity-30 backdrop-blur-lg rounded-2xl justify-between p-6 shadow-[0_0_10px_rgba(255,215,0,0.3)] border border-yellow-500/40">
// // // // // // // // // //                     <div className="flex justify-end">
// // // // // // // // // //                       <button
// // // // // // // // // //                         aria-label="Close menu"
// // // // // // // // // //                         data-testid="close-menu-button"
// // // // // // // // // //                         onClick={close}
// // // // // // // // // //                         className="text-amber-900 hover:text-yellow-500 transition-colors duration-300 p-2 rounded-full bg-black bg-opacity-30"
// // // // // // // // // //                       >
// // // // // // // // // //                         <XMark className="w-6 h-6" />
// // // // // // // // // //                       </button>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <ul className="flex flex-col gap-6 items-start">
// // // // // // // // // //                       {menuItems.map(({ name, href }) => (
// // // // // // // // // //                         <li key={name}>
// // // // // // // // // //                           <LocalizedClientLink
// // // // // // // // // //                             href={href}
// // // // // // // // // //                             className="text-xl font-semibold transition-colors duration-300 text-amber-900 hover:text-yellow-500"
// // // // // // // // // //                             onClick={close}
// // // // // // // // // //                             data-testid={`${name.toLowerCase()}-link`}
// // // // // // // // // //                           >
// // // // // // // // // //                             {name}
// // // // // // // // // //                           </LocalizedClientLink>
// // // // // // // // // //                         </li>
// // // // // // // // // //                       ))}
// // // // // // // // // //                     </ul>
// // // // // // // // // //                     <div className="flex flex-col gap-y-6">
// // // // // // // // // //                       <div
// // // // // // // // // //                         className="flex justify-between items-center p-2 rounded-lg bg-yellow-400 bg-opacity-20 backdrop-blur-md"
// // // // // // // // // //                         onMouseEnter={() => toggleState.open()}
// // // // // // // // // //                         onMouseLeave={() => toggleState.close()}
// // // // // // // // // //                       >
// // // // // // // // // //                         {regions && (
// // // // // // // // // //                           <CountrySelect toggleState={toggleState} regions={regions} />
// // // // // // // // // //                         )}
// // // // // // // // // //                         <ArrowRightMini
// // // // // // // // // //                           className={clx(
// // // // // // // // // //                             "transition-transform duration-150 text-amber-900 w-6 h-6",
// // // // // // // // // //                             toggleState.state ? "-rotate-90" : ""
// // // // // // // // // //                           )}
// // // // // // // // // //                         />
// // // // // // // // // //                       </div>
// // // // // // // // // //                       <Text className="flex justify-between text-sm text-amber-900 opacity-80">
// // // // // // // // // //                         © {new Date().getFullYear()} Gemsnut.com. All rights reserved.
// // // // // // // // // //                       </Text>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </Popover.Panel>
// // // // // // // // // //               </Transition>
// // // // // // // // // //             </>
// // // // // // // // // //           )}
// // // // // // // // // //         </Popover>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   )
// // // // // // // // // // }

// // // // // // // // // // export default SideMenu

// // // // // // // // // "use client"

// // // // // // // // // import { Popover, Transition } from "@headlessui/react"
// // // // // // // // // import { ArrowRightMini, XMark } from "@medusajs/icons"
// // // // // // // // // import { Text, clx } from "@medusajs/ui"
// // // // // // // // // import { Fragment } from "react"

// // // // // // // // // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // // // // // // // // import CountrySelect from "../country-select"
// // // // // // // // // import { HttpTypes } from "@medusajs/types"

// // // // // // // // // const menuItems = [
// // // // // // // // //   { name: "Home", href: "/" },
// // // // // // // // //   { name: "Store", href: "/store" },
// // // // // // // // //   { name: "Search", href: "/search" },
// // // // // // // // //   { name: "Account", href: "/account" },
// // // // // // // // //   { name: "Cart", href: "/cart" },
// // // // // // // // // ]

// // // // // // // // // const SideMenu = ({ regions, className }: { regions: HttpTypes.StoreRegion[] | null; className?: string }) => {
// // // // // // // // //   return (
// // // // // // // // //     <div className={clx("h-full", className)}>
// // // // // // // // //       <div className="flex items-center h-full">
// // // // // // // // //         <Popover className="h-full flex">
// // // // // // // // //           {({ open, close }) => (
// // // // // // // // //             <>
// // // // // // // // //               <Popover.Button
// // // // // // // // //                 aria-label="Open menu"
// // // // // // // // //                 data-testid="nav-menu-button"
// // // // // // // // //                 className="relative h-full flex items-center font-bold uppercase text-yellow-500 hover:text-yellow-400 transition-all ease-out duration-200 focus:outline-none"
// // // // // // // // //               >
// // // // // // // // //                 Menu
// // // // // // // // //               </Popover.Button>

// // // // // // // // //               <Transition
// // // // // // // // //                 show={open}
// // // // // // // // //                 enter="transition ease-out duration-150"
// // // // // // // // //                 enterFrom="opacity-0"
// // // // // // // // //                 enterTo="opacity-100 backdrop-blur-lg"
// // // // // // // // //                 leave="transition ease-in duration-150"
// // // // // // // // //                 leaveFrom="opacity-100 backdrop-blur-lg"
// // // // // // // // //                 leaveTo="opacity-0"
// // // // // // // // //               >
// // // // // // // // //                 <Popover.Panel className="absolute inset-x-0 m-2 flex flex-col w-full sm:w-64 2xl:w-72 h-[calc(100vh-8rem)] text-sm text-ui-fg-on-color z-30">
// // // // // // // // //                   <div className="flex flex-col h-full bg-yellow-500 bg-opacity-30 backdrop-blur-lg rounded-2xl p-6 shadow-[0_0_10px_rgba(255,215,0,0.3)] border border-yellow-500/40 justify-between">
                    
// // // // // // // // //                     {/* Close Button */}
// // // // // // // // //                     <div className="flex justify-end">
// // // // // // // // //                       <button
// // // // // // // // //                         aria-label="Close menu"
// // // // // // // // //                         data-testid="close-menu-button"
// // // // // // // // //                         onClick={close}
// // // // // // // // //                         className="text-amber-900 hover:text-yellow-500 transition-colors duration-300 p-2 rounded-full bg-black bg-opacity-30"
// // // // // // // // //                       >
// // // // // // // // //                         <XMark className="w-6 h-6" />
// // // // // // // // //                       </button>
// // // // // // // // //                     </div>

// // // // // // // // //                     {/* Menu Links */}
// // // // // // // // //                     <ul className="flex flex-col gap-6">
// // // // // // // // //                       {menuItems.map(({ name, href }) => (
// // // // // // // // //                         <li key={name}>
// // // // // // // // //                           <LocalizedClientLink
// // // // // // // // //                             href={href}
// // // // // // // // //                             className="text-xl font-semibold transition-colors duration-300 text-amber-900 hover:text-yellow-500"
// // // // // // // // //                             onClick={close}
// // // // // // // // //                             data-testid={`${name.toLowerCase()}-link`}
// // // // // // // // //                           >
// // // // // // // // //                             {name}
// // // // // // // // //                           </LocalizedClientLink>
// // // // // // // // //                         </li>
// // // // // // // // //                       ))}
// // // // // // // // //                     </ul>

// // // // // // // // //                     {/* Country Select */}
// // // // // // // // //                     {regions && (
// // // // // // // // //                       <div className="flex justify-between items-center p-2 rounded-lg bg-yellow-400 bg-opacity-20 backdrop-blur-md">
// // // // // // // // //                         <CountrySelect regions={regions} />
// // // // // // // // //                         <ArrowRightMini className="text-amber-900 w-6 h-6 transition-transform duration-150" />
// // // // // // // // //                       </div>
// // // // // // // // //                     )}

// // // // // // // // //                     {/* Footer */}
// // // // // // // // //                     <Text className="text-sm text-amber-900 opacity-80">
// // // // // // // // //                       © {new Date().getFullYear()} Gemsnut.com. All rights reserved.
// // // // // // // // //                     </Text>
// // // // // // // // //                   </div>
// // // // // // // // //                 </Popover.Panel>
// // // // // // // // //               </Transition>
// // // // // // // // //             </>
// // // // // // // // //           )}
// // // // // // // // //         </Popover>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default SideMenu



// // // // // // // // "use client"

// // // // // // // // import { Popover, Transition } from "@headlessui/react"
// // // // // // // // import { ArrowRightMini, XMark } from "@medusajs/icons"
// // // // // // // // import { Text, clx, useToggleState } from "@medusajs/ui"
// // // // // // // // import { Fragment } from "react"

// // // // // // // // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // // // // // // // import CountrySelect from "../country-select"
// // // // // // // // import { HttpTypes } from "@medusajs/types"

// // // // // // // // const menuItems = [
// // // // // // // //   { name: "Home", href: "/" },
// // // // // // // //   { name: "Store", href: "/store" },
// // // // // // // //   { name: "Search", href: "/search" },
// // // // // // // //   { name: "Account", href: "/account" },
// // // // // // // //   { name: "Cart", href: "/cart" },
// // // // // // // // ]

// // // // // // // // const SideMenu = ({ regions, className }: { regions: HttpTypes.StoreRegion[] | null; className?: string }) => {
// // // // // // // //   const toggleState = useToggleState()

// // // // // // // //   return (
// // // // // // // //     <div className={clx("h-full", className)}>
// // // // // // // //       <div className="flex items-center h-full">
// // // // // // // //         <Popover className="h-full flex">
// // // // // // // //           {({ open, close }) => (
// // // // // // // //             <>
// // // // // // // //               <Popover.Button
// // // // // // // //                 aria-label="Open menu"
// // // // // // // //                 data-testid="nav-menu-button"
// // // // // // // //                 className="relative h-full flex items-center font-bold uppercase text-yellow-500 hover:text-yellow-400 transition-all ease-out duration-200 focus:outline-none"
// // // // // // // //               >
// // // // // // // //                 Menu
// // // // // // // //               </Popover.Button>

// // // // // // // //               <Transition
// // // // // // // //                 show={open}
// // // // // // // //                 enter="transition ease-out duration-150"
// // // // // // // //                 enterFrom="opacity-0"
// // // // // // // //                 enterTo="opacity-100 backdrop-blur-lg"
// // // // // // // //                 leave="transition ease-in duration-150"
// // // // // // // //                 leaveFrom="opacity-100 backdrop-blur-lg"
// // // // // // // //                 leaveTo="opacity-0"
// // // // // // // //               >
// // // // // // // //                 <Popover.Panel className="absolute inset-x-0 m-2 flex flex-col w-full sm:w-64 2xl:w-72 h-[calc(100vh-8rem)] text-sm text-ui-fg-on-color z-30">
// // // // // // // //                   <div className="flex flex-col h-full bg-yellow-500 bg-opacity-30 backdrop-blur-lg rounded-2xl p-6 shadow-[0_0_10px_rgba(255,215,0,0.3)] border border-yellow-500/40 justify-between">
                    
// // // // // // // //                     {/* Close Button */}
// // // // // // // //                     <div className="flex justify-end">
// // // // // // // //                       <button
// // // // // // // //                         aria-label="Close menu"
// // // // // // // //                         data-testid="close-menu-button"
// // // // // // // //                         onClick={close}
// // // // // // // //                         className="text-amber-900 hover:text-yellow-500 transition-colors duration-300 p-2 rounded-full bg-black bg-opacity-30"
// // // // // // // //                       >
// // // // // // // //                         <XMark className="w-6 h-6" />
// // // // // // // //                       </button>
// // // // // // // //                     </div>

// // // // // // // //                     {/* Menu Links */}
// // // // // // // //                     <ul className="flex flex-col gap-6">
// // // // // // // //                       {menuItems.map(({ name, href }) => (
// // // // // // // //                         <li key={name}>
// // // // // // // //                           <LocalizedClientLink
// // // // // // // //                             href={href}
// // // // // // // //                             className="text-xl font-semibold transition-colors duration-300 text-amber-900 hover:text-yellow-500"
// // // // // // // //                             onClick={close}
// // // // // // // //                             data-testid={`${name.toLowerCase()}-link`}
// // // // // // // //                           >
// // // // // // // //                             {name}
// // // // // // // //                           </LocalizedClientLink>
// // // // // // // //                         </li>
// // // // // // // //                       ))}
// // // // // // // //                     </ul>

// // // // // // // //                     {/* Country Select */}
// // // // // // // //                     {regions && (
// // // // // // // //                       <div
// // // // // // // //                         className="flex justify-between items-center p-2 rounded-lg bg-yellow-400 bg-opacity-20 backdrop-blur-md"
// // // // // // // //                         onMouseEnter={() => toggleState.open()}
// // // // // // // //                         onMouseLeave={() => toggleState.close()}
// // // // // // // //                       >
// // // // // // // //                         <CountrySelect toggleState={toggleState} regions={regions} />
// // // // // // // //                         <ArrowRightMini
// // // // // // // //                           className={clx(
// // // // // // // //                             "transition-transform duration-150 text-amber-900 w-6 h-6",
// // // // // // // //                             toggleState.state ? "-rotate-90" : ""
// // // // // // // //                           )}
// // // // // // // //                         />
// // // // // // // //                       </div>
// // // // // // // //                     )}

// // // // // // // //                     {/* Footer */}
// // // // // // // //                     <Text className="text-sm text-amber-900 opacity-80">
// // // // // // // //                       © {new Date().getFullYear()} Gemsnut.com. All rights reserved.
// // // // // // // //                     </Text>
// // // // // // // //                   </div>
// // // // // // // //                 </Popover.Panel>
// // // // // // // //               </Transition>
// // // // // // // //             </>
// // // // // // // //           )}
// // // // // // // //         </Popover>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   )
// // // // // // // // }

// // // // // // // // export default SideMenu
// // // // // // // "use client"

// // // // // // // import { Popover, Transition } from "@headlessui/react"
// // // // // // // import { ArrowRightMini, XMark } from "@medusajs/icons"
// // // // // // // import { Text, clx, useToggleState } from "@medusajs/ui"
// // // // // // // import { Fragment } from "react"

// // // // // // // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // // // // // // import CountrySelect from "../country-select"
// // // // // // // import { HttpTypes } from "@medusajs/types"

// // // // // // // const SideMenuItems: Record<string, string> = {
// // // // // // //   Home: "/",
// // // // // // //   Store: "/store",
// // // // // // //   Search: "/search",
// // // // // // //   Account: "/account",
// // // // // // //   Cart: "/cart",
// // // // // // // }

// // // // // // // const SideMenu = ({ regions, className }: { regions: HttpTypes.StoreRegion[] | null; className?: string }) => {
// // // // // // //   const toggleState = useToggleState()

// // // // // // //   return (
// // // // // // //     <div className={clx("h-full", className)}>
// // // // // // //       <div className="flex items-center h-full">
// // // // // // //         <Popover className="h-full flex">
// // // // // // //           {({ open, close }) => (
// // // // // // //             <>
// // // // // // //               <div className="text-yellow-500 hover:text-yellow-400 uppercase bg-gradient-to-r from-yellow-300 via-gray-300 to-yellow-500 bg-clip-text text-transparent font-bold drop-shadow-[0_4px_6px_rgba(255,215,0,0.4)] relative flex h-full">
// // // // // // //                 <Popover.Button
// // // // // // //                   data-testid="nav-menu-button"
// // // // // // //                   className="relative h-full flex items-center text-sm sm:text-base px-2 sm:px-4 transition-all ease-out duration-200 focus:outline-none"
// // // // // // //                 >
// // // // // // //                   Menu
// // // // // // //                 </Popover.Button>
// // // // // // //               </div>

// // // // // // //               <Transition
// // // // // // //                 show={open}
// // // // // // //                 as={Fragment}
// // // // // // //                 enter="transition ease-out duration-150"
// // // // // // //                 enterFrom="opacity-0"
// // // // // // //                 enterTo="opacity-100 backdrop-blur-lg"
// // // // // // //                 leave="transition ease-in duration-150"
// // // // // // //                 leaveFrom="opacity-100 backdrop-blur-lg"
// // // // // // //                 leaveTo="opacity-0"
// // // // // // //               >
// // // // // // //                 <Popover.Panel className="flex flex-col absolute w-full sm:w-64 2xl:w-72 h-[calc(100vh-8rem)] z-30 inset-x-0 text-sm text-ui-fg-on-color m-2">
// // // // // // //                   <div
// // // // // // //                     data-testid="nav-menu-popup"
// // // // // // //                     className="flex flex-col h-full bg-yellow-500 bg-opacity-30 backdrop-blur-lg rounded-2xl justify-between p-4 sm:p-6 shadow-[0_0_10px_rgba(255,215,0,0.3)] border border-yellow-500/40 overflow-y-auto"
// // // // // // //                   >
// // // // // // //                     {/* Close Button */}
// // // // // // //                     <div className="flex justify-end" id="xmark">
// // // // // // //                       <button
// // // // // // //                         data-testid="close-menu-button"
// // // // // // //                         onClick={close}
// // // // // // //                         className="text-amber-900 hover:text-yellow-500 transition-colors duration-300 p-2 rounded-full bg-black bg-opacity-30"
// // // // // // //                       >
// // // // // // //                         <XMark className="w-6 h-6" />
// // // // // // //                       </button>
// // // // // // //                     </div>

// // // // // // //                     {/* Menu Items */}
// // // // // // //                     <ul className="flex flex-col gap-4 sm:gap-6 items-start justify-start">
// // // // // // //                       {Object.entries(SideMenuItems).map(([name, href]) => (
// // // // // // //                         <li key={name}>
// // // // // // //                           <LocalizedClientLink
// // // // // // //                             href={href}
// // // // // // //                             className="text-lg sm:text-xl font-semibold transition-colors duration-300 text-amber-900 hover:text-yellow-500"
// // // // // // //                             onClick={close}
// // // // // // //                             data-testid={`${name.toLowerCase()}-link`}
// // // // // // //                           >
// // // // // // //                             {name}
// // // // // // //                           </LocalizedClientLink>
// // // // // // //                         </li>
// // // // // // //                       ))}
// // // // // // //                     </ul>

// // // // // // //                     {/* Country Select & Footer */}
// // // // // // //                     <div className="flex flex-col gap-y-4 sm:gap-y-6">
// // // // // // //                       {regions && (
// // // // // // //                         <div
// // // // // // //                           className="flex justify-between items-center p-2 rounded-lg bg-yellow-400 bg-opacity-20 backdrop-blur-md"
// // // // // // //                           onMouseEnter={() => toggleState.open()}
// // // // // // //                           onMouseLeave={() => toggleState.close()}
// // // // // // //                         >
// // // // // // //                           <CountrySelect toggleState={toggleState} regions={regions} />
// // // // // // //                           <ArrowRightMini
// // // // // // //                             className={clx(
// // // // // // //                               "transition-transform duration-150 text-amber-900 w-6 h-6",
// // // // // // //                               toggleState.state ? "-rotate-90" : ""
// // // // // // //                             )}
// // // // // // //                           />
// // // // // // //                         </div>
// // // // // // //                       )}
// // // // // // //                       <Text className="flex justify-between text-xs sm:text-sm text-amber-900 opacity-80">
// // // // // // //                         © {new Date().getFullYear()} Gemsnut.com. All rights reserved.
// // // // // // //                       </Text>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 </Popover.Panel>
// // // // // // //               </Transition>
// // // // // // //             </>
// // // // // // //           )}
// // // // // // //         </Popover>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }

// // // // // // // export default SideMenu
// // // // // // "use client"

// // // // // // import { Popover, Transition } from "@headlessui/react"
// // // // // // import { ArrowRightMini, XMark } from "@medusajs/icons"
// // // // // // import { Text, clx, useToggleState } from "@medusajs/ui"
// // // // // // import { Fragment } from "react"

// // // // // // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // // // // // import CountrySelect from "../country-select"
// // // // // // import { HttpTypes } from "@medusajs/types"

// // // // // // const SideMenuItems: Record<string, string> = {
// // // // // //   Home: "/",
// // // // // //   Store: "/store",
// // // // // //   Search: "/search",
// // // // // //   Account: "/account",
// // // // // //   Cart: "/cart",
// // // // // // }

// // // // // // const SideMenu = ({ regions, className }: { regions: HttpTypes.StoreRegion[] | null; className?: string }) => {
// // // // // //   const toggleState = useToggleState()

// // // // // //   return (
// // // // // //     <div className={clx("h-full", className)}>
// // // // // //       <div className="flex items-center h-full">
// // // // // //         <Popover className="h-full flex">
// // // // // //           {({ open, close }) => (
// // // // // //             <>
// // // // // //               <div className="text-yellow-500 hover:text-yellow-400 uppercase bg-gradient-to-r from-yellow-300 via-gray-300 to-yellow-500 bg-clip-text text-transparent font-bold drop-shadow-[0_4px_6px_rgba(255,215,0,0.4)] relative flex h-full">
// // // // // //                 <Popover.Button
// // // // // //                   data-testid="nav-menu-button"
// // // // // //                   className="relative h-full flex items-center text-sm sm:text-base px-3 sm:px-5 transition-all ease-out duration-200 focus:outline-none"
// // // // // //                 >
// // // // // //                   Menu
// // // // // //                 </Popover.Button>
// // // // // //               </div>

// // // // // //               <Transition
// // // // // //                 show={open}
// // // // // //                 as={Fragment}
// // // // // //                 enter="transition ease-out duration-150"
// // // // // //                 enterFrom="opacity-0"
// // // // // //                 enterTo="opacity-100 backdrop-blur-lg"
// // // // // //                 leave="transition ease-in duration-150"
// // // // // //                 leaveFrom="opacity-100 backdrop-blur-lg"
// // // // // //                 leaveTo="opacity-0"
// // // // // //               >
// // // // // //                 <Popover.Panel className="flex flex-col fixed top-0 left-0 w-[80%] sm:w-64 md:w-72 h-full z-50 bg-yellow-500 bg-opacity-30 backdrop-blur-lg rounded-r-2xl shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-yellow-500/40 overflow-y-auto transition-transform transform translate-x-0">
// // // // // //                   <div className="flex flex-col h-full p-4 sm:p-6">
// // // // // //                     {/* Close Button */}
// // // // // //                     <div className="flex justify-end">
// // // // // //                       <button
// // // // // //                         data-testid="close-menu-button"
// // // // // //                         onClick={close}
// // // // // //                         className="text-amber-900 hover:text-yellow-500 transition-colors duration-300 p-2 rounded-full bg-black bg-opacity-30"
// // // // // //                       >
// // // // // //                         <XMark className="w-6 h-6" />
// // // // // //                       </button>
// // // // // //                     </div>

// // // // // //                     {/* Menu Items */}
// // // // // //                     <ul className="flex flex-col gap-4 sm:gap-6 items-start justify-start">
// // // // // //                       {Object.entries(SideMenuItems).map(([name, href]) => (
// // // // // //                         <li key={name} className="w-full">
// // // // // //                           <LocalizedClientLink
// // // // // //                             href={href}
// // // // // //                             className="text-base sm:text-lg font-semibold transition-colors duration-300 text-amber-900 hover:text-yellow-500 block w-full p-2 rounded-lg hover:bg-yellow-400/20"
// // // // // //                             onClick={close}
// // // // // //                             data-testid={`${name.toLowerCase()}-link`}
// // // // // //                           >
// // // // // //                             {name}
// // // // // //                           </LocalizedClientLink>
// // // // // //                         </li>
// // // // // //                       ))}
// // // // // //                     </ul>

// // // // // //                     {/* Country Select & Footer */}
// // // // // //                     <div className="flex flex-col gap-y-4 sm:gap-y-6 mt-auto">
// // // // // //                       {regions && (
// // // // // //                         <div
// // // // // //                           className="flex justify-between items-center p-3 rounded-lg bg-yellow-400 bg-opacity-20 backdrop-blur-md cursor-pointer"
// // // // // //                           onMouseEnter={() => toggleState.open()}
// // // // // //                           onMouseLeave={() => toggleState.close()}
// // // // // //                         >
// // // // // //                           <CountrySelect toggleState={toggleState} regions={regions} />
// // // // // //                           <ArrowRightMini
// // // // // //                             className={clx(
// // // // // //                               "transition-transform duration-150 text-amber-900 w-6 h-6",
// // // // // //                               toggleState.state ? "-rotate-90" : ""
// // // // // //                             )}
// // // // // //                           />
// // // // // //                         </div>
// // // // // //                       )}
// // // // // //                       <Text className="text-center text-xs sm:text-sm text-amber-900 opacity-80">
// // // // // //                         © {new Date().getFullYear()} Gemsnut.com. All rights reserved.
// // // // // //                       </Text>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </Popover.Panel>
// // // // // //               </Transition>
// // // // // //             </>
// // // // // //           )}
// // // // // //         </Popover>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default SideMenu
// // // // // "use client"

// // // // // import { Popover, Transition } from "@headlessui/react"
// // // // // import { ArrowRightMini, XMark } from "@medusajs/icons"
// // // // // import { Text, clx, useToggleState } from "@medusajs/ui"
// // // // // import { Fragment } from "react"

// // // // // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // // // // import CountrySelect from "../country-select"
// // // // // import { HttpTypes } from "@medusajs/types"

// // // // // const SideMenuItems: Record<string, string> = {
// // // // //   Home: "/",
// // // // //   Store: "/store",
// // // // //   Search: "/search",
// // // // //   Account: "/account",
// // // // //   Cart: "/cart",
// // // // // }

// // // // // const SideMenu = ({ regions, className }: { regions: HttpTypes.StoreRegion[] | null; className?: string }) => {
// // // // //   const toggleState = useToggleState()

// // // // //   return (
// // // // //     <div className={clx("h-full", className)}>
// // // // //       <div className="flex items-center h-full">
// // // // //         <Popover className="h-full flex">
// // // // //           {({ open, close }) => (
// // // // //             <>
// // // // //               <div className="text-yellow-500 hover:text-yellow-400 uppercase font-bold relative flex h-full">
// // // // //                 <Popover.Button
// // // // //                   data-testid="nav-menu-button"
// // // // //                   className="relative h-full flex items-center text-sm sm:text-base px-4 sm:px-6 transition-all ease-out duration-200 focus:outline-none"
// // // // //                 >
// // // // //                   Menu
// // // // //                 </Popover.Button>
// // // // //               </div>

// // // // //               <Transition
// // // // //                 show={open}
// // // // //                 as={Fragment}
// // // // //                 enter="transition ease-out duration-300 transform"
// // // // //                 enterFrom="opacity-0 -translate-x-full"
// // // // //                 enterTo="opacity-100 translate-x-0"
// // // // //                 leave="transition ease-in duration-300 transform"
// // // // //                 leaveFrom="opacity-100 translate-x-0"
// // // // //                 leaveTo="opacity-0 -translate-x-full"
// // // // //               >
// // // // //                 <Popover.Panel className="fixed top-0 left-0 w-[80%] sm:w-64 md:w-72 h-full z-50 bg-gray-900 text-white bg-opacity-95 backdrop-blur-lg shadow-xl border-r border-gray-700 overflow-y-auto transition-transform">
// // // // //                   <div className="flex flex-col h-full p-5">
// // // // //                     {/* Close Button */}
// // // // //                     <div className="flex justify-end">
// // // // //                       <button
// // // // //                         data-testid="close-menu-button"
// // // // //                         onClick={close}
// // // // //                         className="text-white hover:text-gray-400 transition-colors duration-300 p-2 rounded-full"
// // // // //                       >
// // // // //                         <XMark className="w-6 h-6" />
// // // // //                       </button>
// // // // //                     </div>

// // // // //                     {/* Menu Items */}
// // // // //                     <ul className="flex flex-col gap-4 mt-6">
// // // // //                       {Object.entries(SideMenuItems).map(([name, href]) => (
// // // // //                         <li key={name} className="w-full">
// // // // //                           <LocalizedClientLink
// // // // //                             href={href}
// // // // //                             className="text-lg font-medium transition-colors duration-300 text-white hover:text-yellow-400 block w-full p-3 rounded-md hover:bg-gray-700"
// // // // //                             onClick={close}
// // // // //                             data-testid={`${name.toLowerCase()}-link`}
// // // // //                           >
// // // // //                             {name}
// // // // //                           </LocalizedClientLink>
// // // // //                         </li>
// // // // //                       ))}
// // // // //                     </ul>

// // // // //                     {/* Country Select & Footer */}
// // // // //                     <div className="flex flex-col gap-y-6 mt-auto">
// // // // //                       {regions && (
// // // // //                         <div
// // // // //                           className="flex justify-between items-center p-3 rounded-lg bg-gray-800 cursor-pointer"
// // // // //                           onMouseEnter={() => toggleState.open()}
// // // // //                           onMouseLeave={() => toggleState.close()}
// // // // //                         >
// // // // //                           <CountrySelect toggleState={toggleState} regions={regions} />
// // // // //                           <ArrowRightMini
// // // // //                             className={clx(
// // // // //                               "transition-transform duration-150 text-white w-6 h-6",
// // // // //                               toggleState.state ? "-rotate-90" : ""
// // // // //                             )}
// // // // //                           />
// // // // //                         </div>
// // // // //                       )}
// // // // //                       <Text className="text-center text-xs sm:text-sm text-gray-400">
// // // // //                         © {new Date().getFullYear()} Gemsnut.com. All rights reserved.
// // // // //                       </Text>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </Popover.Panel>
// // // // //               </Transition>
// // // // //             </>
// // // // //           )}
// // // // //         </Popover>
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default SideMenu
// // // // "use client"

// // // // import { Popover, Transition } from "@headlessui/react"
// // // // import { ArrowRightMini, XMark } from "@medusajs/icons"
// // // // import { Text, clx, useToggleState } from "@medusajs/ui"
// // // // import { Fragment, useMemo } from "react"

// // // // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // // // import CountrySelect from "../country-select"
// // // // import { HttpTypes } from "@medusajs/types"

// // // // const SideMenu = ({ regions, className }: { regions: HttpTypes.StoreRegion[] | null; className?: string }) => {
// // // //   const toggleState = useToggleState()

// // // //   const menuItems = useMemo(() => [
// // // //     { name: "Home", href: "/" },
// // // //     { name: "Store", href: "/store" },
// // // //     { name: "Search", href: "/search" },
// // // //     { name: "Account", href: "/account" },
// // // //     { name: "Cart", href: "/cart" },
// // // //   ], [])

// // // //   return (
// // // //     <div className={clx("h-full", className)}>
// // // //       <div className="flex items-center h-full">
// // // //         <Popover className="h-full flex">
// // // //           {({ open, close }) => (
// // // //             <>
// // // //               <div className="text-yellow-500 hover:text-yellow-400 uppercase bg-gradient-to-r from-yellow-300 via-gray-300 to-yellow-500 bg-clip-text text-transparent font-bold drop-shadow-[0_4px_6px_rgba(255,215,0,0.4)] relative flex h-full">
// // // //                 <Popover.Button
// // // //                   data-testid="nav-menu-button"
// // // //                   className={clx(
// // // //                     "relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none",
// // // //                     "text-sm sm:text-base px-2 sm:px-4"
// // // //                   )}
// // // //                 >
// // // //                   Menu
// // // //                 </Popover.Button>
// // // //               </div>

// // // //               <Transition
// // // //                 show={open}
// // // //                 as={Fragment}
// // // //                 enter="transition ease-out duration-150"
// // // //                 enterFrom="opacity-0"
// // // //                 enterTo="opacity-100 backdrop-blur-lg"
// // // //                 leave="transition ease-in duration-150"
// // // //                 leaveFrom="opacity-100 backdrop-blur-lg"
// // // //                 leaveTo="opacity-0"
// // // //               >
// // // //                 <Popover.Panel className="flex flex-col absolute w-full sm:w-64 2xl:w-72 h-[calc(100vh-8rem)] z-30 inset-x-0 text-sm text-ui-fg-on-color m-2">
// // // //                   <div
// // // //                     data-testid="nav-menu-popup"
// // // //                     className="flex flex-col h-full bg-yellow-500 bg-opacity-30 backdrop-blur-lg rounded-2xl justify-between p-4 sm:p-6 shadow-[0_0_10px_rgba(255,215,0,0.3)] border border-yellow-500/40 overflow-y-auto"
// // // //                   >
// // // //                     <div className="flex justify-end" id="xmark">
// // // //                       <button
// // // //                         data-testid="close-menu-button"
// // // //                         onClick={close}
// // // //                         className="text-amber-900 hover:text-yellow-500 transition-colors duration-300 p-2 rounded-full bg-black bg-opacity-30"
// // // //                       >
// // // //                         <XMark className="w-6 h-6" />
// // // //                       </button>
// // // //                     </div>
// // // //                     <ul className="flex flex-col gap-4 sm:gap-6 items-start justify-start">
// // // //                       {menuItems.map(({ name, href }) => (
// // // //                         <li key={name}>
// // // //                           <LocalizedClientLink
// // // //                             href={href}
// // // //                             className={clx(
// // // //                               "text-lg sm:text-xl font-semibold transition-colors duration-300",
// // // //                               "text-amber-900 hover:text-yellow-500"
// // // //                             )}
// // // //                             onClick={close}
// // // //                             data-testid={`${name.toLowerCase()}-link`}
// // // //                           >
// // // //                             {name}
// // // //                           </LocalizedClientLink>
// // // //                         </li>
// // // //                       ))}
// // // //                     </ul>
// // // //                     <div className="flex flex-col gap-y-4 sm:gap-y-6">
// // // //                       <div
// // // //                         className="flex justify-between items-center p-2 rounded-lg bg-yellow-400 bg-opacity-20 backdrop-blur-md"
// // // //                         onMouseEnter={() => toggleState.open()}
// // // //                         onMouseLeave={() => toggleState.close()}
// // // //                       >
// // // //                         {regions && (
// // // //                           <CountrySelect toggleState={toggleState} regions={regions} />
// // // //                         )}
// // // //                         <ArrowRightMini
// // // //                           className={clx(
// // // //                             "transition-transform duration-150 text-amber-900 w-6 h-6",
// // // //                             toggleState.state ? "-rotate-90" : ""
// // // //                           )}
// // // //                         />
// // // //                       </div>
// // // //                       <Text className="flex justify-between text-xs sm:text-sm text-amber-900 opacity-80">
// // // //                         © {new Date().getFullYear()} Gemsnut.com. All rights reserved.
// // // //                       </Text>
// // // //                     </div>
// // // //                   </div>
// // // //                 </Popover.Panel>
// // // //               </Transition>
// // // //             </>
// // // //           )}
// // // //         </Popover>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default SideMenu
// // // "use client"

// // // import { Popover, Transition } from "@headlessui/react";
// // // import { ArrowRightMini, XMark } from "@medusajs/icons";
// // // import { Text, clx, useToggleState } from "@medusajs/ui";
// // // import { Fragment, useMemo } from "react";

// // // import LocalizedClientLink from "@modules/common/components/localized-client-link";
// // // import CountrySelect from "../country-select";
// // // import { HttpTypes } from "@medusajs/types";

// // // const SideMenu = ({ regions, className }: { regions: HttpTypes.StoreRegion[] | null; className?: string }) => {
// // //   const toggleState = useToggleState();

// // //   const menuItems = useMemo(
// // //     () => [
// // //       { name: "Home", href: "/" },
// // //       { name: "Store", href: "/store" },
// // //       { name: "Search", href: "/search" },
// // //       { name: "Account", href: "/account" },
// // //       { name: "Cart", href: "/cart" },
// // //     ],
// // //     []
// // //   );

// // //   return (
// // //     <div className={clx("h-full", className)}>
// // //       <div className="flex items-center h-full">
// // //         <Popover className="h-full flex">
// // //           {({ open, close }) => (
// // //             <>
// // //               <div className="text-yellow-500 hover:text-yellow-400 uppercase bg-gradient-to-r from-yellow-300 via-gray-300 to-yellow-500 bg-clip-text text-transparent font-bold drop-shadow-[0_4px_6px_rgba(255,215,0,0.4)] relative flex h-full">
// // //                 <Popover.Button
// // //                   data-testid="nav-menu-button"
// // //                   className={clx(
// // //                     "relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none",
// // //                     "text-sm sm:text-base px-2 sm:px-4"
// // //                   )}
// // //                 >
// // //                   Menu
// // //                 </Popover.Button>
// // //               </div>

// // //               <Transition
// // //                 show={open}
// // //                 as={Fragment}
// // //                 enter="transition ease-out duration-150"
// // //                 enterFrom="opacity-0"
// // //                 enterTo="opacity-100 backdrop-blur-lg"
// // //                 leave="transition ease-in duration-150"
// // //                 leaveFrom="opacity-100 backdrop-blur-lg"
// // //                 leaveTo="opacity-0"
// // //               >
// // //                 <Popover.Panel className="flex flex-col absolute w-full sm:w-64 2xl:w-72 h-[calc(100vh-8rem)] z-30 inset-x-0 text-sm text-ui-fg-on-color m-2">
// // //                   <div
// // //                     data-testid="nav-menu-popup"
// // //                     className="flex flex-col h-full bg-yellow-500 bg-opacity-30 backdrop-blur-lg rounded-2xl justify-between p-4 sm:p-6 shadow-[0_0_10px_rgba(255,215,0,0.3)] border border-yellow-500/40 overflow-y-auto"
// // //                   >
// // //                     <div className="flex justify-end" id="xmark">
// // //                       <button
// // //                         data-testid="close-menu-button"
// // //                         onClick={close}
// // //                         className="text-amber-900 hover:text-yellow-500 transition-colors duration-300 p-2 rounded-full bg-black bg-opacity-30"
// // //                       >
// // //                         <XMark className="w-6 h-6" />
// // //                       </button>
// // //                     </div>
// // //                     <ul className="flex flex-col gap-4 sm:gap-6 items-start justify-start">
// // //                       {menuItems.map(({ name, href }) => (
// // //                         <li key={name}>
// // //                           <LocalizedClientLink
// // //                             href={href}
// // //                             className="text-lg sm:text-xl font-semibold transition-colors duration-300 text-amber-900 hover:text-yellow-500"
// // //                             onClick={close}
// // //                             data-testid={`${name.toLowerCase()}-link`}
// // //                           >
// // //                             {name}
// // //                           </LocalizedClientLink>
// // //                         </li>
// // //                       ))}
// // //                     </ul>
// // //                     <div className="flex flex-col gap-y-4 sm:gap-y-6">
// // //                       <div
// // //                         className="flex justify-between items-center p-2 rounded-lg bg-yellow-400 bg-opacity-20 backdrop-blur-md"
// // //                         onMouseEnter={toggleState.open}
// // //                         onMouseLeave={toggleState.close}
// // //                       >
// // //                         {regions && <CountrySelect toggleState={toggleState} regions={regions} />}
// // //                         <ArrowRightMini
// // //                           className={clx(
// // //                             "transition-transform duration-150 text-amber-900 w-6 h-6",
// // //                             toggleState.state ? "-rotate-90" : ""
// // //                           )}
// // //                         />
// // //                       </div>
// // //                       <Text className="flex justify-between text-xs sm:text-sm text-amber-900 opacity-80">
// // //                         © {new Date().getFullYear()} Gemsnut.com. All rights reserved.
// // //                       </Text>
// // //                     </div>
// // //                   </div>
// // //                 </Popover.Panel>
// // //               </Transition>
// // //             </>
// // //           )}
// // //         </Popover>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SideMenu;
// // "use client"

// // import { Popover, Transition } from "@headlessui/react"
// // import { ArrowRightMini, XMark } from "@medusajs/icons"
// // import { Text, clx, useToggleState } from "@medusajs/ui"
// // import { Fragment } from "react"

// // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // import CountrySelect from "../country-select"
// // import { HttpTypes } from "@medusajs/types"

// // const SideMenuItems: Record<string, string> = {
// //   Home: "/",
// //   Store: "/store",
// //   Search: "/search",
// //   Account: "/account",
// //   Cart: "/cart",
// // }

// // const SideMenu = ({ regions, className }: { regions: HttpTypes.StoreRegion[] | null; className?: string }) => {
// //   const toggleState = useToggleState()

// //   return (
// //     <div className={clx("h-full", className)}>
// //       <div className="flex items-center h-full">
// //         <Popover className="h-full flex">
// //           {({ open, close }) => (
// //             <>
// //               <div className="text-yellow-500 hover:text-yellow-400 uppercase font-bold relative flex h-full">
// //                 <Popover.Button
// //                   data-testid="nav-menu-button"
// //                   className="relative h-full flex items-center text-sm sm:text-base px-4 sm:px-6 transition-all ease-out duration-200 focus:outline-none"
// //                 >
// //                   Menu
// //                 </Popover.Button>
// //               </div>

// //               <Transition
// //                 show={open}
// //                 as={Fragment}
// //                 enter="transition ease-out duration-300 transform"
// //                 enterFrom="opacity-0 -translate-x-full"
// //                 enterTo="opacity-100 translate-x-0"
// //                 leave="transition ease-in duration-300 transform"
// //                 leaveFrom="opacity-100 translate-x-0"
// //                 leaveTo="opacity-0 -translate-x-full"
// //               >
// //                 <Popover.Panel className="fixed top-0 left-0 w-[80%] sm:w-64 md:w-72 h-full z-50 bg-gray-900 text-white bg-opacity-95 backdrop-blur-lg shadow-xl border-r border-gray-700 overflow-y-auto transition-transform">
// //                   <div className="flex flex-col h-full p-5">
// //                     {/* Close Button */}
// //                     <div className="flex justify-end">
// //                       <button
// //                         data-testid="close-menu-button"
// //                         onClick={close}
// //                         className="text-white hover:text-gray-400 transition-colors duration-300 p-2 rounded-full"
// //                       >
// //                         <XMark className="w-6 h-6" />
// //                       </button>
// //                     </div>

// //                     {/* Menu Items */}
// //                     <ul className="flex flex-col gap-4 mt-6">
// //                       {Object.entries(SideMenuItems).map(([name, href]) => (
// //                         <li key={name} className="w-full">
// //                           <LocalizedClientLink
// //                             href={href}
// //                             className="text-lg font-medium transition-colors duration-300 text-white hover:text-yellow-400 block w-full p-3 rounded-md hover:bg-gray-700"
// //                             onClick={close}
// //                             data-testid={`${name.toLowerCase()}-link`}
// //                           >
// //                             {name}
// //                           </LocalizedClientLink>
// //                         </li>
// //                       ))}
// //                     </ul>

// //                     {/* Country Select & Footer */}
// //                     <div className="flex flex-col gap-y-6 mt-auto">
// //                       {regions && (
// //                         <div
// //                           className="flex justify-between items-center p-3 rounded-lg bg-gray-800 cursor-pointer"
// //                           onMouseEnter={() => toggleState.open()}
// //                           onMouseLeave={() => toggleState.close()}
// //                         >
// //                           <CountrySelect toggleState={toggleState} regions={regions} />
// //                           <ArrowRightMini
// //                             className={clx(
// //                               "transition-transform duration-150 text-white w-6 h-6",
// //                               toggleState.state ? "-rotate-90" : ""
// //                             )}
// //                           />
// //                         </div>
// //                       )}
// //                       <Text className="text-center text-xs sm:text-sm text-gray-400">
// //                         © {new Date().getFullYear()} Gemsnut.com. All rights reserved.
// //                       </Text>
// //                     </div>
// //                   </div>
// //                 </Popover.Panel>
// //               </Transition>
// //             </>
// //           )}
// //         </Popover>
// //       </div>
// //     </div>
// //   )
// // }

// // export default SideMenu
// "use client"

// import { Popover, Transition } from "@headlessui/react"
// import { ArrowRightMini, XMark } from "@medusajs/icons"
// import { Text, clx, useToggleState } from "@medusajs/ui"
// import { Fragment } from "react"

// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import CountrySelect from "../country-select"
// import { HttpTypes } from "@medusajs/types"

// const SideMenuItems: Record<string, string> = {
//   Home: "/",
//   Store: "/store",
//   Search: "/search",
//   Account: "/account",
//   Cart: "/cart",
// }

// const SideMenu = ({ regions, className }: { regions: HttpTypes.StoreRegion[] | null; className?: string }) => {
//   const toggleState = useToggleState()

//   return (
//     <div className={clx("h-full", className)}>
//       <div className="flex items-center h-full">
//         <Popover className="h-full flex">
//           {({ open, close }) => (
//             <>
//               <div className="text-yellow-500 hover:text-yellow-400 uppercase font-bold relative flex h-full">
//                 <Popover.Button
//                   data-testid="nav-menu-button"
//                   className="relative h-full flex items-center text-sm sm:text-base px-4 sm:px-6 transition-all ease-out duration-200 focus:outline-none"
//                 >
//                   Menu
//                 </Popover.Button>
//               </div>

//               <Transition
//                 show={open}
//                 as={Fragment}
//                 enter="transition ease-out duration-300 transform"
//                 enterFrom="opacity-0 -translate-x-full"
//                 enterTo="opacity-100 translate-x-0"
//                 leave="transition ease-in duration-300 transform"
//                 leaveFrom="opacity-100 translate-x-0"
//                 leaveTo="opacity-0 -translate-x-full"
//               >
//                 <Popover.Panel className="fixed top-0 left-0 w-[80%] sm:w-64 md:w-72 h-full z-50 text-white overflow-y-auto transition-transform"
//                   style={{
//                     background: "rgba(218, 102, 5, 0.02)",
//                     borderRadius: "16px",
//                     boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
//                     backdropFilter: "blur(12.5px)",
//                     WebkitBackdropFilter: "blur(12.5px)",
//                     border: "1px solid rgba(218, 102, 5, 0.3)",
//                   }}>
//                   <div className="flex flex-col h-full p-5">
//                     {/* Close Button */}
//                     <div className="flex justify-end">
//                       <button
//                         data-testid="close-menu-button"
//                         onClick={close}
//                         className="text-white hover:text-gray-400 transition-colors duration-300 p-2 rounded-full"
//                       >
//                         <XMark className="w-6 h-6" />
//                       </button>
//                     </div>

//                     {/* Menu Items */}
//                     <ul className="flex flex-col gap-4 mt-6">
//                       {Object.entries(SideMenuItems).map(([name, href]) => (
//                         <li key={name} className="w-full">
//                           <LocalizedClientLink
//                             href={href}
//                             className="text-lg font-medium transition-colors duration-300 text-white hover:text-yellow-400 block w-full p-3 rounded-md hover:bg-gray-700"
//                             onClick={close}
//                             data-testid={`${name.toLowerCase()}-link`}
//                           >
//                             {name}
//                           </LocalizedClientLink>
//                         </li>
//                       ))}
//                     </ul>

//                     {/* Country Select & Footer */}
//                     <div className="flex flex-col gap-y-6 mt-auto">
//                       {regions && (
//                         <div
//                           className="flex justify-between items-center p-3 rounded-lg bg-gray-800 cursor-pointer"
//                           onMouseEnter={() => toggleState.open()}
//                           onMouseLeave={() => toggleState.close()}
//                         >
//                           <CountrySelect toggleState={toggleState} regions={regions} />
//                           <ArrowRightMini
//                             className={clx(
//                               "transition-transform duration-150 text-white w-6 h-6",
//                               toggleState.state ? "-rotate-90" : ""
//                             )}
//                           />
//                         </div>
//                       )}
//                       <Text className="text-center text-xs sm:text-sm text-gray-400">
//                         © {new Date().getFullYear()} Gemsnut.com. All rights reserved.
//                       </Text>
//                     </div>
//                   </div>
//                 </Popover.Panel>
//               </Transition>
//             </>
//           )}
//         </Popover>
//       </div>
//     </div>
//   )
// }

// export default SideMenu

"use client"

import { Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const SideMenuItems: Record<string, string> = {
  Home: "/",
  Store: "/store",
  Search: "/search",
  Account: "/account",
  Cart: "/cart",
}

const SideMenu = ({ regions, className }: { regions: HttpTypes.StoreRegion[] | null; className?: string }) => {
  const toggleState = useToggleState()

  return (
    <div className={clx("h-full", className)}>
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="text-yellow-500 hover:text-yellow-400 uppercase bg-gradient-to-r from-yellow-300 via-gray-300 to-yellow-500 bg-clip-text text-transparent font-bold drop-shadow-[0_4px_6px_rgba(255,215,0,0.4)] relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className={clx(
                    "relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none",
                    "text-sm sm:text-base px-2 sm:px-4"
                  )}
                >
                  Menu
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-lg"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-lg"
                leaveTo="opacity-0"
              >
                <Popover.Panel className="flex flex-col absolute w-full sm:w-64 2xl:w-72 h-[calc(100vh-8rem)] z-30 inset-x-0 text-sm text-ui-fg-on-color m-2">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full bg-yellow-500 bg-opacity-30 backdrop-blur-lg rounded-2xl justify-between p-4 sm:p-6 shadow-[0_0_10px_rgba(255,215,0,0.3)] border border-yellow-500/40 overflow-y-auto"
                  >
                    <div className="flex justify-end" id="xmark">
                      <button
                        data-testid="close-menu-button"
                        onClick={close}
                        className="text-amber-900 hover:text-yellow-500 transition-colors duration-300 p-2 rounded-full bg-black bg-opacity-30"
                      >
                        <XMark className="w-6 h-6" />
                      </button>
                    </div>
                    <ul className="flex flex-col gap-4 sm:gap-6 items-start justify-start">
                      {Object.entries(SideMenuItems).map(([name, href]) => (
                        <li key={name}>
                          <LocalizedClientLink
                            href={href}
                            className={clx(
                              "text-lg sm:text-xl font-semibold transition-colors duration-300",
                              "text-amber-900 hover:text-yellow-500"
                            )}
                            onClick={close}
                            data-testid={`${name.toLowerCase()}-link`}
                          >
                            {name}
                          </LocalizedClientLink>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-y-4 sm:gap-y-6">
                      <div
                        className="flex justify-between items-center p-2 rounded-lg bg-yellow-400 bg-opacity-20 backdrop-blur-md"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150 text-amber-900 w-6 h-6",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="flex justify-between text-xs sm:text-sm text-amber-900 opacity-80">
                        © {new Date().getFullYear()} Gemsnut.com. All rights reserved.
                      </Text>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
