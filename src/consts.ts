/** Site Constants for Bearup's Blog */

/** Site title - displayed in header and meta tags */
export const SITE_TITLE = "Bearup's Blog";

/** Site description - used in meta tags and SEO */
export const SITE_DESCRIPTION = "Exploring AI, Cybersecurity, Data, Privacy, and the technologies shaping our future. Thoughts and insights for tech professionals.";

/** Site URL - used for canonical URLs and RSS */
export const SITE_URL = "https://bearup.dev";

/** Author name */
export const AUTHOR_NAME = "Bearup";

/** Social links */
export const SOCIAL_LINKS = {
	github: "https://github.com/bearup",
	twitter: "https://twitter.com/bearup",
	linkedin: "https://linkedin.com/in/bearup",
	mastodon: "https://infosec.exchange/@bearup",
} as const;

/** Navigation items */
export const NAV_ITEMS = [
	{ label: "Home", href: "/" },
	{ label: "Blog", href: "/blog" },
	{ label: "About", href: "/about" },
] as const;
