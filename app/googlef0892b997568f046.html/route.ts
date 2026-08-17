export function GET() {
  return new Response('google-site-verification: googlef0892b997568f046.html\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
