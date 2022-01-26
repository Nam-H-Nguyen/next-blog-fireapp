// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Api routes that only execute on the server & will not add to JS bundle size
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
