import React from 'react'
import cc from 'classcat'

import * as Logo from '~/components/logo'
import * as Navigation from '~/components/navigation'
import * as Button from '~/components/button'
import * as Icon from '~/components/icon'
import { defineDisplayName } from '~/utils'

export enum Variant {
  Primary,
  Gray,
}

const classNames = {
  variants: {
    [Variant.Primary]: 'c-header--primary',
    [Variant.Gray]: 'c-header--gray',
  },
  elements: {
    container: 'c-header__container',
    logo: 'c-header__logo',
    cta: 'c-header__cta',
  },
}

type Props = {
  variant: Variant
  youtubeSocialLink: string
}

export function component({ variant, youtubeSocialLink }: Props) {
  const navigationVariant =
    variant === Variant.Primary
      ? Navigation.Variant.White
      : Navigation.Variant.Black
  const ctaButtonColor =
    variant === Variant.Primary ? Button.Color.White : Button.Color.Primary

  return (
    <header className={classNames.variants[variant]}>
      <div className={cc(['l-container', classNames.elements.container])}>
        <Logo.primary className={{ block: classNames.elements.logo }} />
        <Navigation.component variant={navigationVariant}>
          <Navigation.item to="/home">خانه</Navigation.item>
          <Navigation.item to="/episodes">آرشیو برنامه‌ها</Navigation.item>
          <Navigation.item to="/guests">مهمان‌ها</Navigation.item>
          <Navigation.item to="/about">درباره سافتویرتاکز</Navigation.item>
        </Navigation.component>
        <Button.cta
          color={ctaButtonColor}
          className={classNames.elements.cta}
          href={youtubeSocialLink}
          as="a"
          target="_blank"
        >
          کانال یوتیوب
          <Icon.Link.external size={Icon.Size.S17} />
        </Button.cta>
      </div>
    </header>
  )
}

defineDisplayName('Header', { component })
