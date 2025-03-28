import Image from "next/image";
import { getThemeSettings } from '../../lib/graphql';
export default async function Header() {
    const settings = await getThemeSettings();
    const menu = settings.themeGeneralSettings.header.header.headerMenu;
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="/" className="flex gap-2 items-center">
                <Image src={settings.themeGeneralSettings.header.header.headerLogo.node.sourceUrl} alt="MyBrand Logo" width={50} height={50} />
                <h1 className="text-2xl font-bold text-gray-800 m-0">Headless Training</h1>
                </a>
                <ul className="flex space-x-6">
                {menu.map((menuItem, menuIndex) => (
                    <li key={menuIndex}><a href={`${menuItem.slug}`} className="text-gray-600 hover:text-blue-500">{menuItem.name}</a></li>
                ))}
                </ul>
            </div>
        </nav>
    );
}