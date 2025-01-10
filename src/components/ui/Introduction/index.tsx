import Button from "../Button"
import Tags from "../Tags"
import ProductTags from "../TagsProduct"
import Image from "next/image"

const tags = ["React Native", "React", "Web", "Typescript", "Expo", "Next.js", "Mobile", "OpenAI API"]
const productTags = ["User Research",  "Analytics", "Data Driven Development", "Design System", "Strategy", "Leadership"]

const Introduction = () => {
    return (
        <div className="self-auto">
            <div className="lg:max-w-xs bg-white  lg:rounded-xl pb-2">
                <div className="rounded-t-xl flex justify-center mb-3 bg-gradient-to-b flex">
                    <Image alt="Profile Picture" src="/IMG_1404.jpg" width={180} height={180} className="rounded-full mt-8"></Image>
                </div>

                <p className="flex justify-center font-semibold text-xl mb-3">Marek Majchrzak</p>
                <div className="text-sm bg-gray-50 rounded-lg p-5 mx-2">
                    <a href="/PierreMaraisCV.pdf" download="PierreMaraisCV">
                        <Button
                            className="flex justify-center items-center gap-3 w-full text-white bg-blue-600 hover:bg-blue-500 ring-offset-2 ring-blue-600 focus:ring shadow rounded-lg">
                            Download CV
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4">
                                <path fill="currentColor"
                                      d="M13 10h5l-6 6l-6-6h5V3h2zm-9 9h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2z"></path>
                            </svg>
                        </Button>
                    </a>
                    <hr className="my-5"></hr>
                    <div className="flex gap-3 font-medium">
                        <div className="flex flex-col gap-3 justify-center">
                            <a href="https://www.linkedin.com/in/m-majch/" target="_blank"
                               aria-label="Social media" rel="noreferrer">
                                <svg className="w-6 h-6 hover:text-gray-900 duration-150" fill="none"
                                     viewBox="0 0 28 28">
                                    <g clipPath="url(#clip0_1274_2978)">
                                        <path fill="currentColor"
                                              d="M25.927 0H2.067C.924 0 0 .902 0 2.018v23.959C0 27.092.924 28 2.067 28h23.86C27.07 28 28 27.092 28 25.982V2.018C28 .902 27.07 0 25.927 0zM8.307 23.86H4.151V10.495h4.156V23.86zM6.229 8.673a2.407 2.407 0 110-4.812 2.406 2.406 0 010 4.812zM23.86 23.86h-4.15v-6.497c0-1.547-.028-3.543-2.16-3.543-2.16 0-2.49 1.69-2.49 3.434v6.606h-4.144V10.495h3.98v1.826h.056c.552-1.05 1.908-2.16 3.926-2.16 4.206 0 4.982 2.767 4.982 6.366v7.333z"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1274_2978">
                                            <path fill="#fff" d="M0 0h28v28H0z"></path>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                        <div className="flex flex-col gap-3 justify-center">
                            <a href="https://www.linkedin.com/in/pierre-marais-a67-/" target="_blank"
                               rel="noopener noreferrer">
                                Contact me on Linkedin
                            </a>
                        </div>
                    </div>
                    <hr className="my-5"></hr>
                    I am an Software Engineer and Product Manager with 7+ years of experience and
                    a track record of delivering
                    successful applications used by hundred thousands users.
                    <br/>
                    <br/>
                    My primary strength in tech is React Native and Web Development, but I have experience with backend
                    as well.
                    <br/>
                    <br/>
                    I love working in a team on building meaningful products and scalable solutions.
                    <div className="my-4">
                        <Tags tags={tags}></Tags>
                    </div>
                    <div className="my-4">
                        <ProductTags className={"bg-blue"} tags={productTags}></ProductTags>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction