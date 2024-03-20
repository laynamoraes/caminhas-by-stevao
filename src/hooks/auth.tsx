// Criando o nosso contexto/hook
// Passo 1: criar o contexto

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"
import { User } from "../interfaces/user"
import { client } from "../network/api"

interface AuthContextData {
  user: User | null
  signIn(credentials: AuthCredentials): void
  signOut(): void
}

interface AuthCredentials {
  email: string
  password: string
}

// criamos o contexto, definimos a sua tipagem e os valores default
const AuthContext = createContext<AuthContextData>({} as AuthContextData)

// Passo 2: definir o provider (definição das funções e estados que vamos compartilhar com toda a aplicação)

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<User | null>(() => {
    const user = localStorage.getItem("user")

    if (!user) {
      return null
    }

    const userJSON = JSON.parse(user)
    return userJSON
  })

  const signIn = useCallback(async ({ email, password }: AuthCredentials) => {
    const { data } = await client.get<User[]>(`users?email=${email}`)

    if (data.length == 0 || data[0].password !== password) {
      throw new Error("Invalid credentials!")
    }

    localStorage.setItem("user", JSON.stringify(data[0]))
    setUser(data[0])
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem("user")
    setUser(null)
  }, [])

  // memoize
  const providerData = useMemo(() => {
    console.log("useMemo")
    return {
      user,
      signIn,
      signOut,
    }
  }, [user, signIn, signOut])

  return (
    <AuthContext.Provider value={providerData}>{children}</AuthContext.Provider>
  )
}

// Passo 3: criar o hook (função que nos permitirá ter acesso a esse contexto)
export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) throw new Error("useAuth must be used within an AuthProvider")

  return context
}
