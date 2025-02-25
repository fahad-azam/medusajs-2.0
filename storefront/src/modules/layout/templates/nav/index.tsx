import { Suspense } from "react"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-20 mx-auto border-b duration-200 bg-gradient-to-r from-gold-400 to-gold-600 border-gold-500 shadow-md">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              {/* Updated SideMenu with elegant styling */}
              <SideMenu
                regions={regions}
                className="text-white hover:text-yellow-300 transition-colors duration-300"
              />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-opacity-80 uppercase bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent font-serif font-bold tracking-widest drop-shadow-lg"
              data-testid="nav-store-link"
            >
              Luxura Jewels
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-8 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-8 h-full">
              {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold px-4 py-2 rounded-full shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg border border-yellow-500"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold px-4 py-2 rounded-full shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg border border-yellow-500"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold px-4 py-2 rounded-full shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg border border-yellow-500"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              {/* Updated CartButton with elegant styling */}              
              <CartButton className="text-yellow-300 hover:text-yellow-400 uppercase bg-gradient-to-r from-yellow-300 via-gray-300 to-yellow-500 bg-clip-text text-transparent font-serif font-bold tracking-widest drop-shadow-[0_4px_6px_rgba(255,215,0,0.4)]" />             
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
