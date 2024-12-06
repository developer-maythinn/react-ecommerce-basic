export async function GET(req, { params }) {
    const products = [
      { id: 1, name: 'Product 1', price: 10, description: 'Description 1' },
      { id: 2, name: 'Product 2', price: 20, description: 'Description 2' },
    ];
    const product = products.find(p => p.id === parseInt(params.id));
    if (product) return new Response(JSON.stringify(product));
    return new Response('Product Not Found', { status: 404 });
  }
  