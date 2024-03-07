// Criando o nosso contexto/hook
// Passo 1: criar o contexto

import { createContext, useContext, useState } from "react"
import { User } from "../interfaces/user"

interface AuthContextData {
  user: User
  // signIn(): void;
}

// criamos o contexto, definimos a sua tipagem e os valores default
const AuthContext = createContext<AuthContextData>({} as AuthContextData)

// Passo 2: definir o provider (definição das funções e estados que vamos compartilhar com toda a aplicação)

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [userData, setUserData] = useState<User>({} as User)

  return (
    <AuthContext.Provider value={{ user: userData }}>
      {children}
    </AuthContext.Provider>
  )
}

// Passo 3: criar o hook (função que nos permitirá ter acesso a esse contexto)
export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) throw new Error("useAuth must be used within an AuthProvider")

  return context
}
