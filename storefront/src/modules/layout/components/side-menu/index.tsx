
"use client"

import { Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const SideMenuItems = {
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
            <div
              className="h-full flex items-center relative"
              onMouseEnter={toggleState.open}
              onMouseLeave={toggleState.close}
            >
              <div className="text-yellow-500 hover:text-yellow-400 uppercase bg-gradient-to-r from-yellow-300 via-gray-300 to-yellow-500 bg-clip-text text-transparent font-bold drop-shadow-[0_4px_6px_rgba(255,215,0,0.4)]">
                Menu
              </div>

              <Transition
                show={toggleState.state}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0 translate-y-2"
                enterTo="opacity-100 translate-y-0 backdrop-blur-lg"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0 backdrop-blur-lg"
                leaveTo="opacity-0 translate-y-2"
              >
                <Popover.Panel className="absolute top-full left-0 flex flex-col w-full pr-4 sm:pr-0 sm:w-64 2xl:w-72 h-[calc(100vh-8rem)] z-30 text-sm text-ui-fg-on-color m-2">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full bg-yellow-500 bg-opacity-30 backdrop-blur-lg rounded-2xl justify-between p-6 shadow-[0_0_10px_rgba(255,215,0,0.3)] border border-yellow-500/40"
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
                    <ul className="flex flex-col gap-6 items-start justify-start">
                      {Object.entries(SideMenuItems).map(([name, href]) => {
                        return (
                          <li key={name}>
                            <LocalizedClientLink
                              href={href}
                              className={clx(
                                "text-xl font-semibold transition-colors duration-300",
                                "text-amber-900 hover:text-yellow-500"
                              )}
                              onClick={close}
                              data-testid={`${name.toLowerCase()}-link`}
                            >
                              {name}
                            </LocalizedClientLink>
                          </li>
                        )
                      })}
                    </ul>
                    <div className="flex flex-col gap-y-6">
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
                      <Text className="flex justify-between text-sm text-amber-900 opacity-80">
                        © {new Date().getFullYear()} Gemsnut.com. All rights reserved.
                      </Text>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </div>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu




