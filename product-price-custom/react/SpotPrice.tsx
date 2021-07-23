import React from 'react'
import { defineMessages } from 'react-intl'
import { useProduct } from 'vtex.product-context'
import { FormattedCurrency } from 'vtex.format-currency'
import { useCssHandles, CssHandlesTypes } from 'vtex.css-handles'
import { IOMessageWithMarkers } from 'vtex.native-types'

import { getDefaultSeller } from './modules/seller'

const CSS_HANDLES = ['spotPrice', 'spotPriceValue', 'transferPrice', 'webPayPrice', 'mercadolibrePrice'] as const

const messages = defineMessages({
  title: {
    id: 'admin/spot-price.title',
  },
  description: {
    id: 'admin/spot-price.description',
  },
  default: {
    id: 'store/spot-price.default',
  },
})

interface Props {
  message?: string
  markers?: string[]
  /** Used to override default CSS handles */
  classes?: CssHandlesTypes.CustomClasses<typeof CSS_HANDLES>
}

function SpotPrice({
  message = messages.default.id,
  markers = [],
  classes,
}: Props) {
  const { handles } = useCssHandles(CSS_HANDLES, { classes })
  const productContextValue = useProduct()

  const seller = getDefaultSeller(productContextValue?.selectedItem?.sellers)

  const commercialOffer: any = seller?.commertialOffer

  if (!commercialOffer || commercialOffer?.AvailableQuantity <= 0) {
    return null
  }

  const spotPriceValue = commercialOffer.spotPrice
  const sellingPriceValue = commercialOffer.SellingPrice
  const mercadolibrePrice = (sellingPriceValue * 1)
  const webPayPrice = (sellingPriceValue * 0.98)
  const transferPrice = (sellingPriceValue * 0.96)

  if (spotPriceValue === sellingPriceValue) {
    return null
  }

  return (
    <span className={handles.spotPrice}>
      <IOMessageWithMarkers
        message={message}
        markers={markers}
        handleBase="spotPrice"
        values={{
          spotPriceValue: (
            <><span key="transferPrice" className={handles.transferPrice}>
              Transferencia: <FormattedCurrency value={transferPrice} />
            </span><span key="webPayPrice" className={handles.webPayPrice}>
                WebPay: <FormattedCurrency value={webPayPrice} />
              </span><span key="mercadolibrePrice" className={handles.mercadolibrePrice}>
                Mercado Libre: <FormattedCurrency value={mercadolibrePrice} />
              </span></>
          ),
        }}
      />
    </span>
  )
}

SpotPrice.schema = {
  title: messages.title.id,
}

export default SpotPrice
