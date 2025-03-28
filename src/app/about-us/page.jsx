import Image from "next/image";
import { getThemeSettings } from '../../lib/graphql';
import React from 'react'

export default async function AboutUs() {
  const settings = await getThemeSettings();
  const menu = settings.themeGeneralSettings.header.header.headerMenu;
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="p-5 text-center">
        ABOUT US PAGE
      </div>
    </div>
  )
}