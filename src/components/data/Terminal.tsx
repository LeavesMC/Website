import type { KeyboardEvent } from "react";

import { type ReactNode, useEffect, useRef, useState } from "react";
import type { ProjectProps } from "@/lib/context/downloads";
import { formatISOFullTime } from "@/lib/util/time";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const getNaturalDelay = () => Math.floor(Math.random() * 80) + 40;

function InfoLog({ children }: { children: ReactNode }) {
  return (
    <div>
      <span className="text-sky-400">
        [{formatISOFullTime(new Date())} INFO]
      </span>
      : {children}
    </div>
  );
}

function WarnLog({ children }: { children: ReactNode }) {
  return (
    <div>
      <span className="text-yellow-300">
        [{formatISOFullTime(new Date())} WARN]
      </span>
      : {children}
    </div>
  );
}

export function Terminal({ project }: ProjectProps) {
  const [cmd, setCmd] = useState("");
  const [args, setArgs] = useState("");
  const [loading, setLoading] = useState("");
  const [output, setOutput] = useState<ReactNode>(null);
  const [success, setSuccess] = useState<ReactNode>(null);
  const [input, setInput] = useState<ReactNode>(null);
  const [cmdOutput, _setCmdOutput] = useState<ReactNode>(null);

  const cmdOutputRef = useRef(cmdOutput);
  function setCmdOutput(data: ReactNode[]) {
    cmdOutputRef.current = data;
    _setCmdOutput(data);
  }

  const handleCommand = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      let currentCmdInfoOutput: string[] = [];
      let currentCmdWarnOutput: string[] = [];
      switch (event.currentTarget.value) {
        case "help": {
          currentCmdInfoOutput = [
            "Existing commands: bot, help, leaves, plugins, version",
          ];
          break;
        }
        case "bot": {
          currentCmdInfoOutput = [
            "Usage: /bot [create | remove | action | list]",
          ];
          break;
        }
        case "leaves": {
          currentCmdInfoOutput = [
            "Usage: /leaves [reload | update | peaceful]",
          ];
          break;
        }
        case "leaves reload": {
          currentCmdInfoOutput = ["CONSOLE: Leaves config reload complete."];
          break;
        }
        case "leaves update": {
          currentCmdInfoOutput = [
            "Trying to update Leaves, see the console for more info.",
            "[Leaves] Trying to get latest build info.",
          ];
          currentCmdWarnOutput = [
            "[Leaves] Can't get build info, stopping update.",
          ];
          break;
        }
        case "leaves peaceful": {
          currentCmdInfoOutput = [
            "Must specify a world! ex: '/leaves peaceful world'",
          ];
          break;
        }
        case "leaves peaceful world": {
          currentCmdInfoOutput = [
            "Peaceful Mode Switch for world: world",
            "Refuses per -1 tick",
            "Now count -1/0",
          ];
          break;
        }
        case "leaves peaceful world_nether": {
          currentCmdInfoOutput = [
            "Peaceful Mode Switch for world: world_nether",
            "Refuses per -1 tick",
            "Now count -1/0",
          ];
          break;
        }
        case "leaves peaceful world_the_end": {
          currentCmdInfoOutput = [
            "Peaceful Mode Switch for world: world_the_end",
            "Refuses per -1 tick",
            "Now count -1/0",
          ];
          break;
        }
        case "plugins": {
          currentCmdInfoOutput = ["Server Plugins (0):"];
          break;
        }
        case "version": {
          currentCmdInfoOutput = [
            `This server is running Leaves version ${project.latestStableVersion}`,
          ];
          break;
        }
        default: {
          currentCmdInfoOutput = ['Unknown command. Type "/help" for help.'];
        }
      }
      setCmdOutput([
        cmdOutputRef.current,
        <div key={event.currentTarget.id}>
          {">"} {event.currentTarget.value}
        </div>,
        currentCmdInfoOutput.map((outputLine: string, index: number) => (
          <InfoLog key={`${index}`}>{outputLine}</InfoLog>
        )),
        currentCmdWarnOutput.map((outputLine: string, index: number) => (
          <WarnLog key={`${index}`}>{outputLine}</WarnLog>
        )),
      ]);
      event.currentTarget.value = "";
    }
  };

  useEffect(() => {
    const outputLines = [
      `Starting minecraft server version ${project.latestStableVersion}`,
      'Preparing level "world"',
      "Preparing start region for dimension minecraft:overworld",
      "Time elapsed: 363 ms",
      "Preparing start region for dimension minecraft:the_nether",
      "Time elapsed: 147 ms",
      "Preparing start region for dimension minecraft:the_end",
      "Time elapsed: 366 ms",
      "Running delayed init tasks",
    ];

    (async () => {
      let currentCmd = "";
      for (const char of "java") {
        currentCmd += char;
        setCmd(currentCmd);
        await sleep(getNaturalDelay());
      }

      let currentArgs = "";
      for (const char of " -jar leaves.jar") {
        currentArgs += char;
        setArgs(currentArgs);
        await sleep(getNaturalDelay());
      }

      for (let i = 0; i < 3; i++) {
        setLoading("Loading libraries, please wait" + ".".repeat(i + 1));
        await sleep(500);
      }

      let currentOutput: ReactNode[] = [];
      for (let i = 0; i < outputLines.length; i++) {
        currentOutput = [
          ...currentOutput,
          <InfoLog key={i}>{outputLines[i]}</InfoLog>,
        ];
        setOutput(currentOutput);

        await sleep(getNaturalDelay());
      }

      setSuccess(
        <InfoLog>
          <span className="text-green-400">
            Done (2.274s)! For help, type &quot;help&quot;
          </span>
        </InfoLog>,
      );

      setInput(
        <div>
          {">"}{" "}
          <input
            onKeyDown={(event) => handleCommand(event)}
            className="w-105 bg-transparent border-none outline-none"
          ></input>
        </div>,
      );
    })();
  }, [project.latestStableVersion]);

  return (
    <div className="max-h-82 w-120 h-283 rounded-lg bg-gray-800">
      <div className="w-full bg-gray-900 rounded-t-lg flex p-2 gap-2">
        <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
        <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
        <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
      </div>
      <div className="max-h-74 p-4 font-mono text-xs text-white overflow-y-hidden flex flex-col-reverse">
        {input}
        <div>{cmdOutput}</div>
        <div>{success}</div>
        <div>{output}</div>
        <div>
          <span className="text-gray-400">{loading}</span>
        </div>
        <div>
          <span className="text-green-400">$ </span>
          <span className="text-blue-400">{cmd}</span>
          <span>{args}</span>
        </div>
      </div>
    </div>
  );
}
