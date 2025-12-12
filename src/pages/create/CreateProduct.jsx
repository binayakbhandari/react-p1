import Navbar from "../../components/Navbar"

const CreateProduct = () => {
    return (
        <>
            <Navbar />
            <form className="flex justify-center m-10">
                <div className="shadow-lg space-y-12 p-10 rounded-lg w-full max-w-3xl">
                    <div className="border-b border-gray-900/10 pb-10">
                        <h2 className="text-base/7 font-semibold text-gray-900">Book Information</h2>
                        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label for="book-name" className="block text-sm/6 font-medium text-gray-900">Book Name</label>
                                <div className="mt-2">
                                    <input id="book-name" type="text" name="book-name" autocomplete="book-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label for="book-author" className="block text-sm/6 font-medium text-gray-900">Book Author</label>
                                <div className="mt-2">
                                    <input id="book-author" type="text" name="book-name" autocomplete="street-address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label for="book-price" className="block text-sm/6 font-medium text-gray-900">Book Price</label>
                                <div className="mt-2">
                                    <input id="book-price" type="text" name="book-price" autocomplete="book-price" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label for="about" className="block text-sm/6 font-medium text-gray-900">Description</label>
                                <div className="mt-2">
                                    <textarea id="about" name="about" rows="3" placeholder="Write a few sentences about the book..." className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label for="cover-photo" className="block text-sm/6 font-medium text-gray-900">Cover photo</label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <svg viewBox="0 0 24 24" fill="currentColor" data-slot="icon" aria-hidden="true" className="mx-auto size-12 text-gray-300">
                                            <path d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd" fill-rule="evenodd" />
                                        </svg>
                                        <div className="mt-4 flex text-sm/6 text-gray-600">
                                            <label for="file-upload" className="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-600 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 hover:text-indigo-500">
                                                <span>Upload a file</span>
                                                <input id="file-upload" type="file" name="file-upload" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex justify-end gap-x-6 pt-5">
                            <button type="button" className="text-sm/6 font-semibold rounded-md px-5 py-2 bg-red-500 text-white cursor-pointer hover:bg-red-600 transition duration-200">Cancel</button>
                            <button type="submit" className="rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer transition duration-200">Submit</button>
                        </div>
                    </div>

                </div>

            </form>

        </>
    )
}

export default CreateProduct