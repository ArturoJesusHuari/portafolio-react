function HeroComponent({children, title, description}) {
  //<img src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Leafs" className="w-full h-48 object-cover sm:h-screen sm:w-4/12">
  return (
    <div className="flex items-center my-2 w-full">
        <div className="sm:p-10">
          <div className="lg:flex mt-10 items-center lg:mt-0">
            <div className="w-full">
              <h1 className="text-2xl font-bold">{title}</h1>
              <div className="flex border-t-2 border-green-700 my-4 items-center">
                <p className="text-sm w-1/2 my-4">{description}</p>
                <div className="w-1/2">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default HeroComponent