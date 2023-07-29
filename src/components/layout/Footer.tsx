import clsx from "clsx";
import Link from "next/link";

import Logo from "@/assets/brand/logo.svg";
import classes from "@/styles/components/layout/Footer.module.css";

const Footer = () => (
  <footer className={clsx("bg-background-dark-80 py-12 mt-8", classes.footer)}>
    <div className="max-w-7xl m-auto px-4">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-sm text-white">
        <div>
          <span className="font-semibold">Getting Started</span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              <Link href="/downloads">Downloads</Link>
            </li>
            <li>
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a href="https://docs.leavesmc.top" target="_blank">
                Documentation
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a href="https://repo.leavesmc.top" target="_blank">
                Javadocs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-semibold">Community</span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              <Link href="/community">Our Community</Link>
            </li>
            <li>
              <a
                href="https://github.com/LeavesMC"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/5hgtU72w33"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-semibold">LeavesMC</span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              <Link href="/team">Our Team</Link>
            </li>
            <li>
              <Link href="/contribute">Contribute</Link>
            </li>
            <li>
              <Link href="/sponsors">Sponsors</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 border-t border-gray-600/50 mt-8 pt-10">
        <Logo className="h-12 cursor-pointer" alt="LeavesMC" />
        <div className="flex-1" />
        <span className="text-gray-300 text-sm">
          © {new Date().getFullYear()} The LeavesMC Team
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
