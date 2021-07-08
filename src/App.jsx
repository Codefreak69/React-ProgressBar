
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {

    let progressBarHandler = () => {

      //for getting total scroll length
      const totalScroll = document.documentElement.scrollTop;

      //for getting window heihgt
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      
        //total scroll
      const scroll = `${totalScroll / windowHeight}`;
      const progressBar = document.getElementById("progressBar");

      progressBar.style.transform = `scale(${scroll} , 1)`;
      progressBar.style.opacity = `${scroll}`

    };
    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });
  return (
    <div className="App">
      <div className="progressBarContainer" id="progressBarContainer">
        <div className="progressBar" id="progressBar"></div>
      </div>
      <p>
        Donec placerat vel enim vel dictum. Donec varius, quam nec iaculis
        sagittis, nulla leo rutrum sapien, eu sollicitudin sapien nisl vel
        massa. Vivamus luctus neque in orci vestibulum volutpat. Donec in
        elementum risus. Fusce semper lorem at tincidunt ultricies. Mauris id
        tincidunt justo, in tincidunt enim. Phasellus et nulla tincidunt,
        bibendum lacus in, vestibulum purus.
      </p>
      Fusce convallis rhoncus neque, eu volutpat elit feugiat eu. Praesent eget
      massa molestie, luctus quam eget, mollis mi. Donec nisi sem, molestie
      vitae facilisis quis, gravida in justo. Praesent imperdiet justo et dui
      tincidunt tempus. Quisque facilisis nulla odio, in feugiat orci placerat
      eget. Donec vitae tempus nulla. Fusce ex ex, semper at lacus sed, tempus
      pretium arcu. Phasellus vitae lectus fringilla, efficitur lectus quis,
      iaculis ligula. Quisque ut bibendum enim, vel viverra tortor. Suspendisse
      ac congue nisl. Sed at quam orci.
      <p>
        Aenean arcu lectus, laoreet eu eleifend in, pretium quis elit. Phasellus
        ultricies ligula eget ex convallis, non laoreet orci rutrum. Praesent
        pellentesque diam eu enim viverra maximus. Mauris ullamcorper nisl
        purus, elementum porttitor orci aliquet in. Aenean est nisl, ultrices
        nec nibh et, sagittis efficitur augue. Donec sagittis ante in rhoncus
        tempor. Aliquam nec turpis at libero suscipit lobortis sed ac risus.
      </p>
      <p>
        {" "}
        Maecenas hendrerit felis sed mollis ornare. Morbi at erat in dui blandit
        placerat in in orci. Donec condimentum hendrerit velit. Pellentesque
        porttitor fermentum nunc a iaculis. Sed scelerisque euismod arcu in
        tempus. Quisque rhoncus, ipsum vitae molestie suscipit, leo sem
        elementum urna, id volutpat dolor arcu vel turpis. Vestibulum faucibus
        hendrerit mi, at consectetur dui aliquam nec. Pellentesque scelerisque
        malesuada eros id malesuada. Praesent fringilla ante eget laoreet porta.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. In euismod
        vehicula ligula, at consectetur sem blandit sit amet. Nunc feugiat, odio
        vel egestas consequat, magna dui venenatis ipsum, eget placerat odio
        urna tristique ante. Ut enim tellus, ullamcorper vel metus ac, congue
        condimentum justo. Nunc sed odio accumsan, sodales dolor nec, aliquam
        ipsum.
      </p>
      <p>
        Nulla ac felis auctor, ullamcorper diam vitae, dapibus ante. Vivamus sed
        massa orci. Fusce porttitor et quam ut tempus. Mauris at mattis diam, in
        iaculis justo. Quisque mattis molestie urna, eget pharetra augue
        ultrices at. Suspendisse quis dui id augue vestibulum feugiat vitae ac
        augue. Nam faucibus nibh nec massa ultrices porta. Nunc eget mattis
        metus, sit amet ultricies risus. In hac habitasse platea dictumst. Nunc
        aliquet tortor neque.
      </p>
      <p>
        Vestibulum commodo consequat lorem vel porta. Cras vehicula, magna ut
        mollis mollis, orci orci accumsan nibh, at accumsan arcu velit in
        ligula. Quisque sit amet fermentum tortor, fermentum gravida metus.
        Etiam porttitor commodo nulla quis vehicula. Pellentesque lacinia ut
        diam aliquet venenatis. Praesent rutrum dui ut erat lobortis, eget
        ornare orci dignissim. In convallis ipsum in laoreet sollicitudin.
        Vivamus rutrum eget sapien finibus elementum. Nulla ultrices vitae ante
        id porttitor. Integer quis hendrerit felis. Ut fringilla tristique
        posuere. Nunc et arcu augue. Mauris ac ex blandit, tincidunt ligula id,
        efficitur nulla. Nunc quis ex erat. Ut gravida dictum rhoncus. Integer a
        magna iaculis, lacinia justo in, dapibus nunc.
      </p>
      <p>
        Quisque dolor metus, pretium in porta tempus, commodo cursus velit. Sed
        viverra justo turpis, nec aliquet metus semper et. Donec in massa quis
        orci ornare porttitor vel et magna. Phasellus non vestibulum metus, in
        lacinia purus. Donec semper arcu elementum, semper sem eu, dignissim
        eros. Curabitur nisi ipsum, mattis vitae risus et, varius semper tortor.
        Donec sed risus risus. Donec id leo lectus. Duis vitae tortor tempor,
        elementum mi et, gravida diam. Maecenas scelerisque nisl odio, molestie
        fermentum sapien mattis nec. Duis eu tincidunt ante.
      </p>
      <p>
        Etiam consequat a purus ultrices tempor. Vestibulum auctor finibus
        auctor. Aliquam vel enim libero. Curabitur lacinia suscipit aliquam.
        Quisque consequat orci dui, a maximus justo vestibulum at. In tempus
        metus dui, ut placerat turpis laoreet non. Maecenas tristique arcu quis
        augue aliquet maximus. Proin in blandit ex. Vestibulum purus purus,
        pulvinar hendrerit porta posuere, consectetur non felis. Vestibulum
        ultrices nisi sit amet nisl egestas dictum. Proin ultrices nisl eget sem
        sagittis bibendum. Integer vulputate vel felis nec tincidunt. Quisque
        molestie mauris ac quam aliquam, non semper ante bibendum. Cras commodo
        dui at ligula gravida, sit amet suscipit nulla tristique. Aenean
        scelerisque placerat ante nec condimentum. Vestibulum tempor elit
        dapibus dictum tristique. Nam nunc enim, finibus eget felis eu, feugiat
        suscipit massa.
      </p>
    </div>
  );
}

export default App;
