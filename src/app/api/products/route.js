export async function GET() {
    return new Response(JSON.stringify([
      { id: 1, name: 'Product 1', price: 10, description: 'Description 1' },
      { id: 2, name: 'Product 2', price: 20, description: 'Description 2' },
    ]));
  }
  