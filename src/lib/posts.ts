export type Post = {
  title: string;
  description: string;
  date: string;
  displayDate: string;
  category: string;
  slug: string;
};

export const posts: Post[] = [
  {
    title: "Progeny",
    description: "Vampire: The Masquerade v5 character creator — how it works and why.",
    date: "2023-05-23T16:00:32.169Z",
    displayDate: "May 23, 2023",
    category: "Projects",
    slug: "vtm-creator",
  },
  {
    title: "Cyoanide",
    description: "A choose-your-own-adventure engine, written and dissected.",
    date: "2022-10-03T16:00:32.169Z",
    displayDate: "Oct 3, 2022",
    category: "Projects",
    slug: "cyoanide-a-choose-your-own-adventure-engine",
  },
];
