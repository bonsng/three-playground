import { Group, Panel, Separator } from "react-resizable-panels";

export default function Page() {
  return (
    <Group className="h-[93vh] mt-[7vh] w-screen">
      <Panel className="border-2 border-r-0 ">
        <div>left</div>
      </Panel>
      <div className="flex flex-col justify-center border-r-2 relative"></div>
      <Panel className="border-2 border-l-0 overflow-y-auto">
        <div>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris
          mauris, rutrum ut elit sed, tempor eleifend mi. Morbi ligula neque,
          gravida et lorem et, mollis elementum tellus. Donec diam metus,
          vehicula eu arcu in, fringilla dignissim odio. Curabitur sollicitudin
          lacus a leo tempus, sit amet porttitor metus euismod. Sed sit amet
          odio tempor, blandit magna sit amet, convallis ante. Suspendisse
          potenti. Integer neque enim, dignissim vitae condimentum et, cursus ac
          nibh. Etiam tincidunt ligula et ex volutpat, eu euismod augue blandit.
          Suspendisse non fringilla mi. Aliquam fermentum convallis suscipit.
          Nunc vestibulum vitae lectus sit amet rhoncus. Aliquam in elit varius,
          rhoncus sapien at, fermentum urna. Morbi vel elementum erat, non
          lacinia arcu. Morbi fermentum justo et lacinia dictum. Proin aliquam
          mauris ac ante consectetur, vel fringilla nisl pretium. Integer
          fringilla massa sed metus posuere, eu facilisis nisi varius. Nam ac
          tellus sit amet lorem ullamcorper feugiat. Fusce mauris ante, tempus
          vitae efficitur suscipit, tristique sit amet erat. Duis lobortis
          lectus in porta elementum. Nulla tincidunt velit eget erat congue
          ornare. Suspendisse in aliquet sem. Aenean faucibus ligula vitae
          malesuada dapibus. Nam fringilla mi vel fermentum faucibus. Ut
          convallis vel ante ac convallis. Proin consequat, elit eget elementum
          rhoncus, arcu nisi sollicitudin neque, sit amet maximus leo turpis
          eget ipsum. Cras nec pellentesque risus, quis scelerisque urna. Fusce
          nibh quam, accumsan in ante vitae, imperdiet suscipit arcu. Maecenas
          pulvinar nibh eu auctor viverra. Suspendisse porta nunc erat. Duis
          tempus sit amet quam et ultrices. Cras velit erat, iaculis in
          sollicitudin sed, hendrerit a justo. Fusce vel laoreet dolor, nec
          finibus diam. Nullam rhoncus turpis quis interdum facilisis. Donec
          porta cursus ante, sed iaculis ante dictum eu. Maecenas pellentesque
          tortor ligula, non vestibulum magna porta nec. Donec blandit orci sed
          odio blandit vestibulum. Fusce cursus justo augue. Maecenas eu
          vehicula magna. Aliquam metus risus, efficitur facilisis lobortis sit
          amet, viverra nec sapien. Vestibulum non varius sapien, vel porta
          ante. Curabitur tincidunt laoreet mauris, ac interdum quam eleifend
          fringilla. Praesent laoreet magna nisl, id ullamcorper metus mattis
          quis. Suspendisse quis lectus sed urna pellentesque dapibus non eu
          risus. Maecenas sit amet auctor arcu. Nullam egestas posuere risus,
          nec fermentum tellus tincidunt sed. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Cras
          vestibulum leo et purus vehicula ultrices. Nullam volutpat lorem vitae
          nulla tristique, non lobortis est efficitur. Etiam nec pharetra
          libero. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Suspendisse venenatis sagittis tellus eu
          fermentum. Morbi vulputate ante egestas, interdum turpis non, lobortis
          lectus. Quisque sodales, massa sit amet placerat posuere, nunc tortor
          euismod ante, in vehicula ligula ipsum a dui. Donec rutrum sit amet
          dolor sit amet faucibus. Sed varius massa eget quam tristique, ac
          interdum nunc fringilla. In maximus aliquam nunc hendrerit fermentum.
        </div>
      </Panel>
    </Group>
  );
}
