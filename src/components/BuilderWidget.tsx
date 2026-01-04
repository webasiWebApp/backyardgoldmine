import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'the-builder-map-page': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'the-builder-search-field': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const BuilderWidget = () => {
  useEffect(() => {
    // Load the map page script
    const mapScript = document.createElement('script');
    mapScript.src = "https://assets.thebuilder.ai/fc71d69e4c03506e4e592a83067c5145/embedded/TheBuilderMapPage.js";
    mapScript.type = "module";
    document.body.appendChild(mapScript);

    // Load the search field script
    const searchScript = document.createElement('script');
    searchScript.src = "https://assets.thebuilder.ai/fc71d69e4c03506e4e592a83067c5145/embedded/TheBuilderSearchField.js";
    searchScript.type = "module";
    document.body.appendChild(searchScript);

    return () => {
      // Cleanup scripts on unmount
      document.body.removeChild(mapScript);
      document.body.removeChild(searchScript);
    };
  }, []);

  return (
    <section id="lead-form" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See If Your Home Qualifies
          </h2>
          <p className="text-lg text-muted-foreground">
            Enter your address to check eligibility and claim your FREE trip!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-8">
          <the-builder-search-field></the-builder-search-field>
        </div>
        
        <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
          <the-builder-map-page style={{ display: 'block', width: '100%', height: '100%' }}></the-builder-map-page>
        </div>
      </div>
    </section>
  );
};

export default BuilderWidget;
