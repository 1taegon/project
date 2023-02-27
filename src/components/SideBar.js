import Link from "next/link";
import { useRouter } from "next/router";

export default function SideBar() {
  const router = useRouter();
  return (
    <nav>
      <div>
        <Link href="/" legacyBehavior>
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/start" legacyBehavior>
          <a className={router.pathname === "/start" ? "active" : ""}>Start</a>
        </Link>
        <Link href="/start" legacyBehavior>
          <a className={router.pathname === "/complete" ? "active" : ""}>
            Complete
          </a>
        </Link>
        <Link href="/start" legacyBehavior>
          <a className={router.pathname === "/check" ? "active" : ""}>Check</a>
        </Link>
      </div>
    </nav>
  );
}
