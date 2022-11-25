export default async function NewsDetail({ params, searchParams }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+params.id)
    const data = await res.json()
    return (
      <div>
        <h1 class="mb-4 mt-12 text-center text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-black">{data.title}</h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{data.body}</p>
      </div>
    );
  }