import { Editor } from "./componentes/Editor";

function App() {
  return (
    <div className="min-h-screen text-zinc-50 p-8 bg-gradient-to-r from-gray-700 via-gray-900 to-black

    // bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400
    ">
      <div className="bg-zinc-900 w-[1100px] mx-auto rounded-xl min-h-[600px] shadow-sm border-black/20 overflow-hidden grid grid-cols-[16rem_1fr] ">
        <aside className="bg-zinc-800 border-r border-r-zinc-700 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400" />
          </div>
        </aside>
        <main className="p-4 prose">
          <Editor />
        </main>
      </div>
    </div>
  );
}

export default App;
