import PageLayout from "./PageLayout";
import SessionStorageForm from "../../storage/SessionStorageForm";

const ContentPage: React.FC= () => {
  return (
    <PageLayout>
        <SessionStorageForm />
    </PageLayout>
  );
}

export default ContentPage;