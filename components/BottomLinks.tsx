
import Image from "next/image";

import Link from "next/link"

export default function BottomLinks() {
  return (
    <div className="mt-6 lg:mt-0 lg:absolute lg:bottom-24">
      <ul className="flex items-center">
        <Link href="https://linkedin.com/in/tony-chau-94538519a" target="_blank"><li className="mr-4">
          <Image
            src="/svgs/linkedin-svg.svg"
            alt="linkedin icon"
            width={30}
            height={30}
          />
        </li>
        </Link>
        <Link href="https://github.com/tchau6469?tab=repositories" target="_blank"><li className="mr-4">
          <Image
            src="/svgs/github-svg.svg"
            alt="github icon"
            width={30}
            height={30}
          />
        </li>
        </Link>
        
        <Link href="https://www.instagram.com/momoszoomies/" target="_blank"><li className="mr-4">
          <Image
            src="/svgs/instagram-svg.svg"
            alt="instagram icon"
            width={30}
            height={30}
          />
        </li>
        </Link>

        
      </ul>
    </div>
  );
}
