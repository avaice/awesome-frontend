export async function GET() {
  return new Response(JSON.stringify({ status: 'hello, world!' }))
}
