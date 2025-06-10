import Button from "./ui/Button"

function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground">© 2024 김개발. All rights reserved.</p>
            </div>

            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">
                Privacy Policy
              </Button>
              <Button variant="ghost" size="sm">
                Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
