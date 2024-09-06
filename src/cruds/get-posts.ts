let names = [
  "Olivia Chen",
  "Liam Rodriguez",
  "Zoe Patel",
  "Ethan Nguyen",
  "Sophia Kim",
  "Jackson Williams",
  "Ava Thompson",
  "Noah Garcia",
  "Isabella Martinez",
  "Mason Lee"
]

const getPosts = (number: number) => {
  let ret = []

  for (let i = 0; i < number; i++) {
    ret.push({
      author: names[i % names.length],
      content: "Innovate fearlessly, collaborate tirelessly, and transform the world with boundless creativity!"
    })
  }

  return ret;
}


export default getPosts;
